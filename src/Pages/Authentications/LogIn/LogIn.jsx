import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router"; // ✅ forgot import
import SocialLogin from "../SocialLogin/SocialLogin";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Login Now</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset space-y-4">
          {/* Email Field */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">The Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">The Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters long
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button className="btn bg-[#CAEB66] text-black w-full">Login</button>

          {/* Register Link */}
          <p className="text-center mt-4 text-sm">
            New to this website?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </fieldset>
      </form>

<SocialLogin></SocialLogin>


    </div>
  );
};

export default LogIn;
