import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_area section_padding_130_0" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              <div className="footer-logo mb-3"></div>
              <p>
                AI 360: Driving Innovations Across Industries, Healthcare,
                Research and Education-2025 (AIIHRE2K25)
              </p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  Amity School of Engineering and Technology, Amity University
                  Madhya Pradesh, Gwalior
                </p>
              </div>
              <div className="footer_social_area">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">About</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to="/About">About us</Link>
                  </li>
                  <li>
                    <a href="/#speakers">Speakers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Contact Us</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="mailto:crmconf.scrs@gmail.com">
                      crmconf.scrs@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:crm@scrs.in">crm@scrs.in</a>
                  </li>
                  <li>
                    <a href="tel:+917692804154">+91-7692804154</a> (WhatsApp
                    messages only)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Committees</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to="/Advisory-comittee">Advisory Committee</Link>
                  </li>
                  <li>
                    <Link to="/TechnicalAdvisoryCommittee">
                      Technical Advisory Committee
                    </Link>
                  </li>
                  <li>
                    <Link to="/Progress">Technical Committee</Link>
                  </li>
                  <li>
                    <Link to="/program-committee">Program Committee</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p className="copywrite-text">
              &copy; {new Date().getFullYear()} Amity University. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;