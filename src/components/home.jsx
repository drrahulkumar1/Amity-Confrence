import React from "react";
import '../styles/home.css';
import conference from '../images/conference.png';
import { FaCalendarDay, FaCalendarAlt, FaCalendarWeek, FaPlus, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa';
import emp from "../images/emp.png";
import { Link } from 'react-router-dom';


function Home() {    
    return (
        <>
            <div class="p-10 bg-surface-secondary hero">
                <div class="container-fluid pt-2 Container">
                    <div class="header">
                        <span class="tagline">AIHEITTLR 2025</span><br/><br/><br/> 
                        <span class="tagline">International Conference on <br></br> Artificial Intelligence in Higher Education Institutions: Transforming Teaching, Learning, and Research</span>
                        <p>Organized by Amity School of Engineering and Technology. <br></br> Amity University Madhya Pradesh</p>
                        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                            <Link to="/Papers-call">
                                <button className="btn btn-custom p-3 fs-5 mt-3">
                                Call For Paper
                                </button>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>

            {/* About */}
            <div class="container-fluid pt-2 about" id="mainabout" name="mainabout">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <h1 class="display-4 my-5 text-danger">About the Conference</h1>
                        <hr/>
                        <h4 className="mt-4">Artificial Intelligence in Higher Education Institutions: Transforming Teaching, Learning, and Research-2025 (AIHEITTLR2K25)</h4>
                        <p className="mt-4">AIHEITTLR2024 conference oﬀers rapid advancements in
                            Arficial Intelligence (AI) are reshaping various sectors, in-
                            cluding higher educaon. This internaonal naonal confer-
                            ence, tled "Integraon of Arficial Intelligence in Higher
                            Engineering Educaon: Transforming Teaching, Learning, and
                            Research," aims to explore the transformave impact of AI
                            technologies on engineering educaon. The conference will
                            bring together educators, researchers, industry experts, and
                            policymakers to discuss innovave AI applicaons, share best
                            pracces, and address the challenges associated with AI inte-
                            graon in higher engineering instuons.
                        </p>
                        <div class="d-flex flex-row gap-3 mt-5">
                            <a className="btn btn-custom p-3 fs-5 mt-3" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FCRM2024">Paper Submission Link</a><br/>
                            <a className="btn btn-custom p-3 fs-5 mt-3">Learn More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 mt-md-4" id="about">
                        <img src={conference} alt="Conference Image" width="200px" height="350px" />
                    </div>
                </div>
            </div>

            {/* Keynote Speakers */}
            <div class="container-fluid pt-2">
                <div class="our-team" id="speakers">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="display-4 text-center text-light">Keynote Speakers</h2>
                                <hr/>
                            </div>
                            {["Dr. Jane Smith", "Prof. John Doe", "Dr. Emily Johnson", "Mr. Alan Brown", "Ms. Rachel Green", "Dr. Liam White"].map((name, index) => (
                                <div key={index} class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                        <div class="client-img">
                                            <img src={emp} alt={`Speaker ${name}`} class="img-fluid" />
                                        </div>
                                        <div class="details">
                                            <h4 class="text-center">{name}</h4>
                                            <h6 class="text-center">{["AI Researcher", "Industry Leader", "Healthcare Innovator", "Data Scientist", "Educator", "AI Strategist"][index]}</h6>
                                            <p class="text-center">Renowned expert in AI applications across industries, healthcare, research, and education.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                        <div class="social-links">
                                            <h4 class="text-center">Get Connected</h4>
                                            <ul>
                                                <li><a href="#"><FaFacebook /></a></li>
                                                <li><a href="#"><FaInstagram /></a></li>
                                                <li><a href="#"><FaLinkedin /></a></li>
                                                <li><a href="#"><FaTwitter /></a></li>
                                                <li><a href="#"><FaPinterest /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Schedule */}
            {/* const speakerImages = [
                "path/to/jane_smith_image.jpg", // Dr. Jane Smith
                "path/to/john_doe_image.jpg",   // Prof. John Doe
                "path/to/emily_johnson_image.jpg", // Dr. Emily Johnson
                "path/to/alan_brown_image.jpg",  // Mr. Alan Brown
                "path/to/rachel_green_image.jpg", // Ms. Rachel Green
                "path/to/liam_white_image.jpg"   // Dr. Liam White
            ]; */}
            <div class="container-fluid pt-2">
                <div class="container schedule" id="schedule">
                    <h1 class="display-4 text-center mt-5 mb-4 text-warning">Event <span class="mt-3 text-success">Schedule</span></h1>
                    <hr/>
                    <div class="row">
                        {[
                            { day: "Day 1", date: "May 15, 2025", desc: "Workshops and Tutorials on AI Fundamentals." },
                            { day: "Day 2", date: "May 16, 2025", desc: "Paper Presentations and Panel Discussions on AI Innovations." },
                            { day: "Day 3", date: "May 17, 2025", desc: "Keynote Speeches and Closing Ceremony." }
                        ].map((schedule, index) => (
                            <div key={index} class="col-md-4 col-sm-12 col-xsx-12">
                                <div class="serviceBox">
                                    <div class="service-icon">
                                        <span>{[<FaCalendarDay />, <FaCalendarAlt />, <FaCalendarWeek />][index]}</span>
                                    </div>
                                    <div class="service-content">
                                        <h3 class="title">{schedule.day}</h3>
                                        <p class="description">
                                            <time>{schedule.date}</time>
                                            {schedule.desc}
                                        </p>
                                        <a href={`/schedule/${schedule.day.toLowerCase()}`} class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"><FaPlus /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
                            <li><Link to="/Advisory-comittee">Advisory Committee </Link></li>
                            <li><Link to="/organizing-committee">Organizing Committee</Link></li>
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

export default Home;
