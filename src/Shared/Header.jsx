import React, { useContext } from "react";
// import { BiSearch } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      {/* <li className="mx-3">
        <BiSearch className="text-2xl" />
      </li> */}
      <li className="mx-3">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1">
            <RiUserLine className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-md w-52"
          >
            {user?.uid ? (
              <li>
                <p onClick={() => logout()} className="text-black">
                  Logout
                </p>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </li>

      <Link to={"/main/shoppingCart"} className="mx-3">
        <HiOutlineShoppingCart className="text-2xl" />
      </Link>
    </>
  );

  return (
    <div className="bg-transparent absolute w-[100%] top-0 z-10 border-b-2 border-white/10">
      <nav className="flex justify-between items-center h-20 w-[92%] mx-auto">
        <div>
          <Link to={"/"} className="logo-font text-4xl text-white">
            Infinity
          </Link>
        </div>
        <div className="">
          <ul className="md:flex items-center hidden text-white">{links}</ul>
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="m-1">
              <GiHamburgerMenu className="text-white text-3xl" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white p-2 shadow rounded-sm w-52 text-black text-center"
            >
              <Link className="py-2">
                <Link to={"/main/shoppingCart"}>Cart</Link>
              </Link>
              {user?.uid ? (
                <li>
                  <p onClick={() => logout()} className="text-black">
                    Logout
                  </p>
                </li>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
