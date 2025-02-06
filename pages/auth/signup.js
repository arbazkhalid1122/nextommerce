"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";

export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = async (form) => {
    const res = await fetch("/api/auth/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.message === "signup successfuly") {
      const { name, lastname, phone, address } = data.account;
      updateAccount({ name, lastname, phone, address, isAdmin: false });
      router.push("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-md space-y-6">
        <form
          className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Sign up to get started
          </p>

          <div className="space-y-5 mt-6">
            {/* Name Input */}
            <div>
              <input
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Name"
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

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
          </div>

          {/* Sign Up Button */}
          <button
            className="w-full flex items-center justify-center p-3 mt-6 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
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

          {/* Google Sign-up */}
          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
            <FaGoogle className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
