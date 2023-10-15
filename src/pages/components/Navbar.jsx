import { React } from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-icon" onClick={toggleDropdown}>
        <img
          src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg"
          alt=""
          className="h-8 px-5"
        />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link href="/auth/register">
            <a className="dropdown-button">Register</a>
          </Link>
          <Link href="/auth/login">
            <a className="dropdown-button">Login</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const router = useRouter();
  return (
    <div>
      {/* Navbar */}
      <div className="antriksh h-20  flex justify-start px-20 items-center fixed m-b-28 z-10 w-full">
        {/* leftside */}
        <div className="flex flex-1 flex-row items-center justify-start px-10">
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
            className="h-24 w-40 m-10 "
          />
          <div>
            <Link
              className="text-gray-300 px-2  hover:text-white text-lg mx-2   "
              href="/"
              onClick={() => router.push("/")}
            >
              TV
            </Link>
            <Link
              className="text-gray-300 px-2  hover:text-white text-lg mx-2  "
              href=""
            >
              Movies
            </Link>
            <Link
              className="text-gray-300 px-2  hover:text-white text-lg mx-2  "
              href=""
            >
              Sports
            </Link>
            <Link
              className="text-gray-300 px-2  hover:text-white text-lg mx-2  "
              href=""
            >
              Disney+
            </Link>
            <Link
              className="text-gray-300 px-2  hover:text-white text-lg mx-2  "
              href=""
            >
              Kids
            </Link>
            <Link
              className="text-gray-300 px-2  hover:text-white text-lg mx-2  "
              href="/userfavourite/list"
            >
              WatchList
            </Link>
          </div>
        </div>
        {/* leftside */}

        {/* rightside */}
        <div className="flex-1 flex items-center justify-end ">
          <input
            type="text"
            className="antriksh w-52 border-b-2 border-gray-400 outline-none text-lg text-gray-200 "
            placeholder="Search"
          />
          <Dropdown />
        </div>
        {/* rightside */}

        {/* Navbar */}
      </div>
    </div>
  );
}
