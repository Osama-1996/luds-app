import { useState } from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent absolute z-20 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={Logo} className="w-[160px] h-[80px]" alt="Logo" /> */}
        </a>
        <div className="flex  space-x-3 ">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${menuOpen ? "block bg-black" : "hidden"
            } w-full md:flex md:w-auto md:order-1 ps-2`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col px-4 items-center font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#home"
                className="nav-link block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent  font-[700]"
                aria-current="page"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="nav-link block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent  font-[700]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="nav-link block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent  font-[700]"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="nav-link block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent  font-[700]"
              >
                Our Process
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent font-[700]"
              >
                Blog
              </a>
            </li>
            <div className="flex">
              <a href="#products">
                <button
                  type="button"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md text-md px-8 py-3 text-center"
                >
                  Get Started
                </button>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
