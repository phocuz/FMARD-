//import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import team from "./assets/team-work.png";
import { Link } from "react-router-dom";

export default function App() {
  // Form Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Formik for Form Management
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`Login Successful!\nEmail: ${values.email}`);
    },
  });

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md flex-col gap-6">
        <h1 className="text-start text-[59px] h-[67px] font-bold">
          <span className="text-customYellow m-2">F</span>MARD
        </h1>

        <div>
          <h2 className="text-3xl font-bold my-6">Log in</h2>
          <p className="text-gray-400">
            Log in with your credentials you entered during <br /> your
            registration.
          </p>

          <form onSubmit={formik.handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-500 my-2"
              >
                Your e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="input your email"
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
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="at least 8 characters"
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
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className="m-4 text-gray-400">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="mx-2">
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-customYellow w-full rounded-lg px-4 py-2 text-medium font-bold text-white"
            >
              Log in
            </button>
          </form>

          <h5 className="text-center m-2 font-semibold text-gray-400">
            Don't you have an account?{" "}
            <span className="text-customYellow"><Link to="signup">Sign up</Link></span>
          </h5>
          <h4 className="text-center text-customYellow">
            <button>Forgot password?</button>
          </h4>
        </div>
      </div>

      <div className="w-full max-w-3xl sm:flex shadow-lg hidden bg-customYellow">
        <div className="flex flex-col justify-center items-center">
          <img
            src={team}
            alt="team-pics"
            className="w-[607px] h-[425px] justify-center m-10"
          />
          <h3 className="w-[503px] h-[117px] text-3xl text-white">
            The best preparation for tomorrow <br />
            is doing your best today. <br />
            Let’s start with vacanxe. <br />
          </h3> 
        </div>
      </div>
    </div>
  );
}
