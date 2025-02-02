"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const submitHandler = async (form) => {
    const res = await fetch("/api/auth/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-md space-y-6">
        <form
          className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Forgot Password
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Enter your email to reset your password
          </p>

          {/* Email Input */}
          <div className="mt-6">
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

          {/* Submit Button */}
          <button
            className="w-full flex items-center justify-center p-3 mt-6 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            type="submit"
            disabled={isSubmitting}
            onClick={()=>{
                router.push("/auth/login");
            }}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Remembered your password? {" "}
          <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}