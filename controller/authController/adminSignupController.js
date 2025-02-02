export default async function signupController(req, res) {
  const {
    name,
    lastname,
    password,
    email,
    role,
    adminEmail,
    adminPassword,
  } = req.body;

  if (!name || !lastname || !email || !password || !role) {
    return errorController(422, "data_incomplete", res);
  }

  try {
    let admin = await Admin.findOne({ email: adminEmail });

    // If no admin exists, create a root admin
    if (!admin) {
      console.log("No admin found, creating a root admin...");
      const hashedAdminPass = await hashPass(adminPassword);
      
      admin = new Admin({
        name: "Super Admin",
        lastname: "Root",
        email: adminEmail,
        password: hashedAdminPass,
        role: "admin",
        root: true, // First admin should be root
      });

      await admin.save();
      console.log("Root admin created successfully.");
    }

    // Verify admin password
    const valid = await comparePass(adminPassword, admin.password);
    if (!valid) return errorController(401, "invalid admin password", res);

    // Create the new admin
    const hashedPass = await hashPass(password);
    const newAdmin = new Admin({
      name,
      lastname,
      email,
      password: hashedPass,
      role,
    });

    const createdAdmin = await newAdmin.save();

    // Generate tokens
    const refresh = tokenGanarator(createdAdmin._id, refreshToken.type, refreshToken.age);
    const access = tokenGanarator(createdAdmin._id, accessToken.type, accessToken.age);

    // Save refresh token in database
    const submitedRef = await refreshTokenSubmiter(refresh, createdAdmin._id);
    if (!submitedRef.message) throw Error("token did not save successfully");

    // Set cookies
    cookieGenerator(accessToken, access, req, res);
    cookieGenerator(refreshToken, refresh, req, res);
    isAdminCookie(req, res, true);

    return res.status(201).json({
      message: "Account created successfully",
      account: { name, lastname },
    });

  } catch (error) {
    if (error.code == 11000) {
      return res.status(500).send({ message: "This Email has been used before" });
    }
    console.error("Signup Error:", error);
    errorController(500, error.message, res);
  }
}
