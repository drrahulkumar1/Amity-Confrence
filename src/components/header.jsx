import { useRef, useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const scheduleOptionsRef = useRef();

  const [scheduleOptions, setScheduleOptions] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        scheduleOptionsRef.current &&
        !scheduleOptionsRef.current.contains(event.target)
      ) {
        setScheduleOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scheduleOptionsRef]);
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#e0e4f4] border-b border-[#e0e4f4] shadow-sm px-0 py-3 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              className="h-[90px] w-[130px] transition-transform duration-300 hover:scale-105"
              alt="Amity logo"
            />
          </Link>

          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="hidden lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto"
            id="navbarCollapse"
          >
            <div className="flex flex-col lg:flex-row lg:mx-auto space-y-2 lg:space-y-0">
              <a
                href="/"
                className="text-[#5f7891] hover:text-[#89b3c6] text-sm font-medium tracking-wider uppercase mx-4 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/#mainabout"
                className="text-[#5f7891] hover:text-[#89b3c6] text-sm font-medium tracking-wider uppercase mx-4 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="/#speakers"
                className="text-[#5f7891] hover:text-[#89b3c6] text-sm font-medium tracking-wider uppercase mx-4 transition-colors duration-300"
              >
                Speakers
              </a>

              <div className="">
                <button
                  className={`text-[#5f7891] hover:text-[#89b3c6] text-sm font-medium tracking-wider uppercase mx-4 transition-colors duration-300`}
                  onMouseEnter={() => setScheduleOptions(!scheduleOptions)}
                >
                  Schedule
                </button>
                {scheduleOptions && (
                  <div
                    className=" absolute mt-2 w-48 bg-white rounded-md shadow-lg"
                    ref={scheduleOptionsRef}
                  >
                    <Link
                      to="schedule/Day1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Day1
                    </Link>
                    <Link
                      to="schedule/Day2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Day2
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="#footer"
                className="text-[#5f7891] hover:text-[#89b3c6] text-sm font-medium tracking-wider uppercase mx-4 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <a
              href="/register"
              className="inline-block bg-[#d3eaf2] hover:bg-[#b4d8e5] text-[#2b3e50] hover:text-white border border-[#a8d1db] hover:border-[#89b3c6] rounded-full px-4 py-2 text-sm font-semibold uppercase transition-all duration-300"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
