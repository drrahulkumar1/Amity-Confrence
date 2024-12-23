import React from "react";
import "../styles/home.css";
import speaker1 from "../images/speaker1.jpeg";
import speaker2 from "../images/speaker2.jpeg";
import speaker3 from "../images/Speaker3.jpg";
import speaker4 from "../images/speaker4.jpg";
import oc1 from "../images/oc1.jpg";
import oc2 from "../images/oc2.jpg";
import oc3 from "../images/oc3.jpg";
import oc4 from "../images/oc4.jpg";
import oc5 from "../images/oc5.jpg";
import {
  FaCalendarDay,
  FaCalendarAlt,
  FaCalendarWeek,
  FaPlus,
} from "react-icons/fa";
// import emp from "../images/emp.png";
import { Link } from "react-router-dom";
import OrganizingCommittee from "./ProgramCommittee";

function Home() {
  return (
    <>
      <div class="p-10 bg-surface-secondary hero mt-4">
        <div class="container-fluid pt-2 Container">
          <div class="header">
            <span class="tagline">
              International Conference <br /> on <br></br> AI 360: Driving
              Innovations Across Industries, Healthcare, Research and
              Education-2025(AIIHRE2K25)
              <br />
              <span className="date-info">
                28th & 29th May 2025 | Hybrid Mode
              </span>
            </span>
            <p style={{ "margin-top": "50px" }}>
              <strong>
                Organized by Amity School of Engineering and Technology. <br />{" "}
                Amity University Madhya Pradesh,Gwalior
                <br />
              </strong>
            </p>
            <div className="d-flex justify-content-center align-items-center custom-btn">
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
            <hr />
            <h4 className="mt-4">
              AI 360: Driving Innovations Across Industries, Healthcare,
              Research and Education-2025 (AIIHRE2K25)
            </h4>
            <p className="mt-4" align="justify">
              AIIHRE2K25 conference oﬀers rapid advancements in Arficial
              Intelligence (AI) are reshaping various sectors, including higher
              educaon. This internaonal naonal conference, tled "Integraon of
              Arficial Intelligence in Higher Engineering Educaon: Transforming
              Teaching, Learning, and Research," aims to explore the
              transformave impact of AI technologies on engineering educaon. The
              conference will bring together educators, researchers, industry
              experts, and policymakers to discuss innovave AI applicaons, share
              best pracces, and address the challenges associated with AI inte-
              graon in higher engineering instuons.
            </p>
            <div class="d-flex flex-row gap-3 mt-5">
              <a
                className="btn btn-custom p-3 fs-5 mt-3 ms-5"
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FCRM2024"
              >
                Paper Submission Link
              </a>
              <br />
              {/* <a className="btn btn-custom p-3 fs-5 mt-3">Learn More</a> */}
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-12 mt-md-4" id="about">
                        <img src={conference} alt="Conference Image" width="200px" height="350px" />
                    </div> */}
        </div>
      </div>
      {/* Keynote Speakers */}
      <div className="container-fluid pt-2">
        <div className="our-team" id="speakers">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="display-4 text-center text-light">
                  Keynote Speakers
                </h2>
                <hr />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {/* Keynote Speaker 1 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={speaker1}
                    alt="Prof. (Dr.) Tanmoy Som"
                    className="card-img-top "
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Prof. (Dr.) Tanmoy Som</h5>
                    <p className="card-subtitle mb-2 text-muted">Professor</p>
                    <p className="card-text speaker-details">
                      Dept. of Mathematical Sciences, Indian Institute of
                      Technology (Banaras Hindu University), Varanasi
                    </p>
                  </div>
                </div>
              </div>
              {/* Keynote Speaker 2 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={speaker2}
                    alt="Prof. (Dr.) Karm Veer Arya"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Prof. (Dr.) Karm Veer Arya</h5>
                    <p className="card-subtitle mb-2 text-muted">Professor</p>
                    <p className="card-text speaker-details">
                      Coordinator, Multimedia and Information Security Research
                      Group, IIIT, Gwalior.
                    </p>
                  </div>
                </div>
              </div>
              {/* Keynote Speaker 3 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={speaker3}
                    alt="Prof. (Dr.) Gautam Srivastava"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">
                      Prof. (Dr.) Gautam Srivastava
                    </h5>
                    <p className="card-subtitle mb-2 text-muted">Professor</p>
                    <p className="card-text speaker-details">
                      Department of Mathematics & Computer Science, Brandon
                      University, Brandon, MB, Canada
                    </p>
                  </div>
                </div>
              </div>
              {/* Keynote Speaker 4 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={speaker4}
                    alt="Prof. (Dr.)Lenin Babu Russeliah"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">
                      Prof. (Dr.)Lenin Babu Russeliah
                    </h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Data Scientist
                    </p>
                    <p className="card-text speaker-details">
                      Product Engineering Manager ConverSight Columbus, Indiana,
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="our-team" id="speakers">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="display-4 text-center text-light">
                  Organizing Committee
                </h2>
                <hr />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3">
              {/* Keynote Speaker 1 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={oc1}
                    alt="Prof. (Dr.) Tanmoy Som"
                    className="card-img-top "
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Prof. (Dr.) Vikas Thada</h5>
                    <p className="card-subtitle mb-2 text-muted">Professor</p>
                    <p className="card-text speaker-details">
                      Amity School of Engineering and Technology, Amity
                      University Madhya Pradesh, Gwalior
                    </p>
                  </div>
                </div>
              </div>
              {/* Keynote Speaker 2 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={oc2}
                    alt="Dr.Ashok Kumar"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Dr.Ashok Kumar</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Associate Professor
                    </p>
                    <p className="card-text speaker-details">
                      Amity School of Engineering and Technology, Amity
                      University Madhya Pradesh, Gwalior
                    </p>
                  </div>
                </div>
              </div>
              {/* Keynote Speaker 3 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={oc3}
                    alt="Dr. Rahul Kumar"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Dr. Rahul Kumar</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Associate Professor
                    </p>
                    <p className="card-text speaker-details">
                      Amity School of Engineering and Technology, Amity
                      University Madhya Pradesh, Gwalior
                    </p>
                  </div>
                </div>
              </div>
              {/* Keynote Speaker 4 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src={oc4} alt="Dr.A.Daniel" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Dr.A.Daniel</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Associate Professor
                    </p>
                    <p className="card-text speaker-details">
                      Amity School of Engineering and Technology, Amity
                      University Madhya Pradesh, Gwalior
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={oc5}
                    alt="Dr.Jhankar Moolchandani"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title1">Dr.Jhankar Moolchandani</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Assistant Professor
                    </p>
                    <p className="card-text speaker-details">
                      Amity School of Engineering and Technology, Amity
                      University Madhya Pradesh, Gwalior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shedule */}
      <div class="container-fluid pt-2">
        <div class="container schedule" id="schedule">
          <h1 class="display-4 text-center mt-5 mb-4 text-warning">
            Event <span class="mt-3 text-success">Schedule</span>
          </h1>
          <hr />
          <div class="row justify-content-center">
            {[
              { day: "Day1", date: "May 27, 2025", desc: " Track 1 & Track 2" },
              { day: "Day2", date: "May 28, 2025", desc: " Track 3 & Track 4" },
            ].map((schedule, index) => (
              <div
                key={index}
                class="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center mb-4"
              >
                <div class="serviceBox text-center">
                  <div class="service-icon">
                    <span>
                      {
                        [
                          <FaCalendarDay />,
                          <FaCalendarAlt />,
                          <FaCalendarWeek />,
                        ][index]
                      }
                    </span>
                  </div>
                  <div class="service-content">
                    <h3 class="title">{schedule.day}</h3>
                    <p class="description">
                      <time>{schedule.date}</time>
                      {schedule.desc}
                    </p>
                    <Link to={`/${schedule.day}`}>
                      <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
    </>
  );
}

export default Home;