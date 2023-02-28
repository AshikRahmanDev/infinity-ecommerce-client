import React from "react";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const VisibleHeader = () => {
  const links = (
    <>
      <li className="mx-3">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1">
            <RiUserLine className="text-2xl text-primary" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-md w-52"
          >
            <li>
              <Link to={"/main/login"} className="text-black">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/main/register"} className="text-black mt-2">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="mx-3">
        <HiOutlineShoppingCart className="text-2xl text-primary" />
      </li>
    </>
  );

  return (
    <div className="w-[90%] mx-auto z-10 border-b-2 border-primary/50">
      <nav className="flex justify-between items-center h-20 w-[92%] mx-auto">
        <div>
          <h4 className="logo-font text-4xl text-primary">Infinity</h4>
        </div>
        <div className="">
          <ul className="md:flex items-center hidden text-black">{links}</ul>
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="m-1">
              <GiHamburgerMenu className="text-primary text-3xl" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white p-2 shadow rounded-sm w-52 text-black text-center"
            >
              <li className="py-2">
                <Link to={"/main/login"}>Login</Link>
              </li>
              <li className="py-2">
                <Link to={"/main/register"}>Register</Link>
              </li>
              <li className="py-2">
                <Link>Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default VisibleHeader;
