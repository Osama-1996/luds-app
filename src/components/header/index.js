import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent absolute z-20 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={Logo} className="h-8" alt="Logo" /> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex">
            <a href="#products">
              <button
                type="button"
                className="text-[#ffffff] bg-[#5f6464] focus:outline-none font-medium rounded-full text-md px-7 py-1 text-center border-2 border-[#5f6464]"
              >
                Contact Us
              </button>
            </a>
          </div>
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
          className={`items-center justify-between ${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 ps-2`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col px-4 items-center font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#home"
                className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent hover:border-[#911A57] font-[700]"
                aria-current="page"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent hover:border-[#911A57] font-[700]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent hover:border-[#911A57] font-[700]"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent hover:border-[#911A57] font-[700]"
              >
                Our Process
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block pt-2 px-1 text-[#ffffff] hover:text-[#ffffff] border-b-4 border-transparent hover:border-[#911A57] font-[700]"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
