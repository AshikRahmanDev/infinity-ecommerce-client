import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, firstName, lastName, password } = data;
    const name = firstName + " " + lastName;
    const user = { name, email };
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          updateUser(name);
          fetch(`http://localhost:5000/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data?.acknowledged) {
                toast.success("Account Succesfully created!", {
                  style: {
                    border: "1px solid #928656",
                    padding: "10px 16px",
                    color: "#928656",
                  },
                  iconTheme: {
                    primary: "#928656",
                    secondary: "#FFFAEE",
                  },
                });
                navigate("/");
              }
            });
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-12">
      <div className="w-[90%] md:w-[30%] mx-auto">
        <h1 className="text-xl uppercase banner-title">new customers</h1>
        <p className="my-3 text-[13px] text-gray-400">
          Create an account below:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div>
            {/* first name */}
            <input
              className="border-b py-2 px-3 w-[47%] text-[13px] mr-5"
              type="text"
              {...register("firstName")}
              name="firstName"
              placeholder="First name"
              required
            />
            {/* last name */}
            <input
              className="border-b py-2 px-3 w-[47%] text-[13px]"
              type="text"
              {...register("lastName")}
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>
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
          </div>
          {/* submit */}
          <div>
            <input
              className="py-2 px-3 mt-3 bg-primary text-[14px] uppercase banner-title text-white rounded-sm"
              type="submit"
              value="create an account"
            />
          </div>
        </form>
        <p className="mt-3 text-[13px]">
          Already have an account?{" "}
          <Link to={"/main/login"} className="text-primary">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
