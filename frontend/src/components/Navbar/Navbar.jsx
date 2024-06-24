import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
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

const Navbar = () => {
  return (
    <div className="flex bg-zinc-800 text-white px-4 py-2 justify-between">
      <Link to={"/"} className="flex items-center">
        <img
          className="h-10 me-4"
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjgyLTI0NS1wLnBuZw.png"
          alt="bsdk"
        />
        <h1 className="text-2xl font-semibold">BookHeaven</h1>
      </Link>
      <div className="nav-links-bookheaven flex items-center gap-4">
        <div className="flex gap-4">
          {links.map((item, i) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 translate-all duration-300 "
              key={i}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Link to="/LogIn" className="px-2 py-1 border border-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300">
            SignIn
          </Link>
          <Link to="/SignUp" className="px-2 py-1 border border-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300">
          SignUp
          </Link>
          <button className="px-2 py-1 bg-blue-500 rounded">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
