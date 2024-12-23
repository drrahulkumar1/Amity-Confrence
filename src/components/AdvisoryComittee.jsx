import React from "react";
import '../styles/Advisory.css';
import conference from '../images/conference.png';
import { FaCalendarDay, FaCalendarAlt, FaCalendarWeek, FaPlus, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa';
import emp from "../images/emp.png";
import { Link } from 'react-router-dom';


function AdvisoryComittee(){
    return(
        <>
            <div class="container-fluid pt-2">
                <div class="our-team" id="speakers">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="display-4 text-center text-light">Advisory Comittee</h2>
                                <hr/>
                            </div>
                            
                            {["Dr. Ashok K. Chauha", "Dr. Aseem Chauhan", "Lt. Gen. V.K. Sharma, AVSM (Retd.)", "Prof. (Dr.) R.S. Tomar", "Prof. (Dr.) M.P. Kaushik", "Prof. (Dr.) Vikas Thada"].map((name, index) => (
                                <div key={index} class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                        <div class="client-img">
                                            <img src={emp} alt={`Speaker ${name}`} class="img-fluid" />
                                        </div>
                                        <div class="details">
                                            <h4 class="text-center">{name}</h4>
                                            <h6 class="text-center">{["Hon’ble Founder President, RBEF", "Hon’ble Chancellor & Chairman, Amity University Madhya Pradesh", "Hon’ble Pro-Chancellor, Amity University Madhya Pradesh", "Hon’ble Vice Chancellor (Officiating), Amity University Madhya Pradesh", "Hon’ble Pro-Vice Chancellor (R), Amity University Madhya Pradesh", "Director (Officiating), Amity School of Engineering & Technology"][index]}</h6>
                                            
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
        </>
    )
}
export default AdvisoryComittee