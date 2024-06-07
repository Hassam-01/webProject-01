import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <div className=" nav flex items-center justify-between space-x-14 bg-white p-4 md:px-14 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0">
        <div className="links flex items-center space-x-12">
          <div className="text-primary font-semibold text-md flex items-center space-x-3">
            <span className="bg-secondary py-1 px-2">LOGO</span>
            <span>XYZ</span>
          </div>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-gray-300">
                {link}
              </a>
            ))}
          </ul>
        </div>
        <div className="signup items-center space-x-3 md:flex hidden">
          <div className="text-md text-primary font-semibold items-center space-x-3 hidden lg:flex">
            <a href="" className="lg:flex items-center hidden">
              <MdOutlineLanguage className="mr-2" />
              <span className=" hover:text-secondary"> Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:hidden flex">
          <button
            className=" text-white focus:outline-none focus:text-gray-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <HiXMark className="w-6 h-6 text-primary" />
            ) : (
              <LuMenu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden space-y-4 pt-24 pb-5 bg-secondary ${isMenuOpen?("block fixed top-0 left-0 right-0"):("hidden")} transition-all duration-300`}>
        {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-gray-300">
                {link}
              </a>
            ))}
      </div>
    </>
  );
}
