import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer
      className="bg-[#e0e4f4] py-16 px-4 md:px-16 w-full relative z-10 shadow-2xl"
      id="footer"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="mb-3"></div>
            <p className="text-gray-700">
              AI 360: Driving Innovations Across Industries, Healthcare,
              Research and Education-2025 (AIIHRE2K25)
            </p>
            <p className="text-gray-600 mb-5">
              Amity School of Engineering and Technology, Amity University
              Madhya Pradesh, Gwalior
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h5 className="text-gray-800 text-lg font-semibold mb-4">About</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="/#speakers"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Speakers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h5 className="text-gray-800 text-lg font-semibold mb-4">
              Contact Us
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:crmconf.scrs@gmail.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  <span className="flex">
                    <IoIosMail className="mr-2 mt-1 text-xl" />{" "}
                    crmconf.scrs@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:crm@scrs.in"
                  className="hover:text-gray-900 transition-colors"
                >
                  <span className="flex">
                    <IoIosMail className="mr-2 mt-1 text-xl" /> crm@scrs.in
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917692804154"
                  className="hover:text-gray-900 transition-colors"
                >
                  <span className="flex">
                    <IoLogoWhatsapp className="mr-2 mt-1 text-lg" />{" "}
                    +91-7692804154
                  </span>
                </a>
                <span className="text-gray-600"> (WhatsApp messages only)</span>
              </li>
            </ul>
          </div>

          {/* Committees Section */}
          <div className="space-y-4">
            <h5 className="text-gray-800 text-lg font-semibold mb-4">
              Committees
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/advisory-committee"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Advisory Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/technical-advisory-committee"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Technical Advisory Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/technical-committee"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Technical Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/internal-program-committee"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Internal Program Committee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Amity University. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
