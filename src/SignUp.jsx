//import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function SignUp(){
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`Sign Up Successful!\nEmail: ${values.email}`);
    },
  });

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-500 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-500 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-500 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customYellow text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div>
            <Link to="/" className="text-center m-2 font-semibold text-gray-400">
            Already have an account?{" "}
            <span className="text-customYellow">Log in</span>
          </Link>
          <h4 className="text-center text-customYellow">
            <button>Forgot password?</button> </h4>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
