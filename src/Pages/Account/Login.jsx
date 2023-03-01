import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-12">
      <div className="w-[90%] md:w-[30%] mx-auto">
        <h1 className="text-xl uppercase banner-title">existing customers</h1>
        <p className="my-3 text-[13px] text-gray-400">
          Sign in to your account below:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email address */}
          <div className="my-4">
            <input
              className="border-b py-2 px-3 w-full text-[13px]"
              type="text"
              {...register("email")}
              name="email"
              placeholder="Email address"
              required
            />
          </div>
          {/* password */}
          <div className="my-4">
            <input
              className="border-b py-2 px-3 w-full text-[13px]"
              type="password"
              {...register("password")}
              name="password"
              placeholder="password"
              required
            />
            <p className="text-[13px] text-gray-400 text-right mt-2">
              forgot password?
            </p>
          </div>
          {/* submit */}
          <div>
            <input
              className="py-2 px-3 bg-primary text-[14px] uppercase banner-title text-white rounded-sm"
              type="submit"
              value="sign in"
            />
          </div>
        </form>
        <p className="mt-3 text-[13px]">
          New in infinity?{" "}
          <Link to={"/main/register"} className="text-primary">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
