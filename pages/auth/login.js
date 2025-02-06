"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";
import { ro } from "date-fns/locale";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = async (form) => {
    localStorage.setItem("user", JSON.stringify(form));
    console.log("Form data: ", form);
    
    if(form.role === "buyer") {
      localStorage.setItem("buyer", true);
      router.push("/user/product");
    }else{
      localStorage.setItem("isAdmin", true);
      router.push("/vender/product");
  }
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-6">
        <form
          className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Sign in to continue
          </p>

          <div className="space-y-5 mt-6">
            {/* Email Input */}
            <div>
              <input
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <input
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Please enter your password",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,40}$/,
                    message: "Must be 6+ chars, include uppercase, lowercase & numbers",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Role Dropdown */}
            <div>
              <select
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("role", {
                  required: "Please select your role",
                })}
              >
                <option value="">Select your role</option>
                <option value="buyer">Buyer</option>
                <option value="supplier">Supplier</option>
              </select>
              {errors.role && (
                <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link href="/auth/forgotPassword" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full flex items-center justify-center p-3 mt-6 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Sign-in */}
          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
            <FaGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
