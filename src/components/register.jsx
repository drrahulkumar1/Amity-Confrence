import React from "react";
import "../styles/register.css";
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Register(){
    return(
        <>
            <div className="googlemap">
            <iframe src="https://forms.gle/84RQtbQog5Vw6mSy9" width="860" height="591" frameborder="0" marginheight="19" marginwidth="0" title="Event registration form">Loading…</iframe>
            </div>

            {/* Footer */}
            <footer class="footer_area section_padding_130_0" id="footer">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="single-footer-widget section_padding_0_130">
                    <div class="footer-logo mb-3"></div>
                    <p>Springer: Driving Innovations Across Industries, Healthcare, Research, and Education - 2025</p>
                    <div class="copywrite-text mb-5">
                        <p class="mb-0">Amity School of Engineering and Technology, AUMP</p>
                    </div>
                    <div class="footer_social_area">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                    <h5 class="widget-title">About</h5>
                    <div class="footer_menu">
                        <ul>
                            <li><a href="/#mainabout">About Us</a></li>
                            <li><a href="/#speakers">Speakers</a></li>
                            <li><a href="#">Terms & Policy</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                    <h5 class="widget-title">Contact Us</h5>
                    <div class="footer_menu">
                        <ul>
                            <li><a href="mailto:crmconf.scrs@gmail.com">crmconf.scrs@gmail.com</a></li>
                            <li><a href="mailto:crm@scrs.in">crm@scrs.in</a></li>
                            <li><a href="tel:+917692804154">+91-7692804154</a> (WhatsApp messages only)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                    <h5 class="widget-title">Committees</h5>
                    <div class="footer_menu">
                        <ul>
                            <Link to="/Advisory-comittee">Advisory Committee </Link>
                            <Link to="/organizing-committee">Organizing Committee</Link>
                            <li><a href="#">Technical Committee</a></li>
                            <li><a href="#">Program Committee</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
        </>

    );
}

export default Register;