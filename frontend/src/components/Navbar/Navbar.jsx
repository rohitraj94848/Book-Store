import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  const [MobileNav, setMobileNav] = useState("hidden");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === false) {
    links.splice(2, 2);
  }

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-4 py-2 justify-between">
        <Link to={"/"} className="flex items-center">
          <img
            className="h-10 me-4"
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjgyLTI0NS1wLnBuZw.png"
            alt="bsdk"
          />
          <h1 className="text-2xl font-semibold">BookHeaven</h1>
        </Link>
        <div className="nav-links-bookheaven md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((item, i) => (
              <Link
                to={item.link}
                className="hover:text-blue-500 translate-all duration-300"
                key={i}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/LogIn"
              className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              SignIn
            </Link>
            <Link
              to="/SignUp"
              className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              SignUp
            </Link>
          </div>
          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-400"
            onClick={() => setMobileNav(MobileNav === "hidden" ? "" : "hidden")}
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div
        className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((item, i) => (
          <Link
            to={item.link}
            className={`${MobileNav} text-white text-5xl font-semibold mb-8 hover:text-blue-500 translate-all duration-300`}
            key={i}
            onClick={() => setMobileNav(MobileNav === "hidden" ? "" : "hidden")}
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/LogIn"
          className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-1 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
        >
          LogIn
        </Link>
        <Link
          to="/SignUp"
          className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-1 bg-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
        >
          SignUp
        </Link>
      </div>
    </>
  );
};

export default Navbar;
