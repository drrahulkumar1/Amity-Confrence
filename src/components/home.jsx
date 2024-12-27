import { FaCalendarDay, FaCalendarAlt, FaCalendarWeek } from "react-icons/fa";
import { Link } from "react-router-dom";
import KeynoteSpeakers from "./KeynoteSpeakers";
import OrganizingCommittee from "./OrganizingCommittee";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[92vh] bg-[url(/src/images/herobg.jpg)] bg-black/50 bg-center bg-cover bg-no-repeat p-10 mt-4">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative container mx-auto h-full flex justify-center items-center z-10">
          <div className="text-center mt-20">
            <span className="text-4xl md:text-5xl font-medium text-white drop-shadow-lg">
              International Conference <br /> on <br />
              AI 360: Driving Innovations Across Industries, Healthcare,
              Research and Education-2025 (AIIHRE2K25)
              <br />
              <span className="text-2xl md:text-3xl font-normal mt-5 block">
                28th & 29th May 2025 | Hybrid Mode
              </span>
            </span>
            <p className="mt-12 font-semibold tracking-wider text-white">
              <strong>
                Organized by Amity School of Engineering and Technology. <br />
                Amity University Madhya Pradesh, Gwalior
              </strong>
            </p>
            <div className="flex justify-center items-center mb-20">
              <Link to="/call-for-papers">
                <button className="bg-[#bcc4e3] hover:bg-[#a8b0d0] text-black px-6 py-3 text-xl mt-3 rounded-lg transition-all duration-300">
                  Call For Paper
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className="container flex items-center justify-center mx-auto px-4 md:px-16 h-[100vh]"
        id="mainabout"
      >
        <div className="text-center">
          <h1 className="text-5xl my-5 text-red-600 leading-relaxed">
            About the Conference
          </h1>
          <hr className="mb-5 border-red-500 mx-auto w-1/2" />
          <h4 className="mt-4 text-3xl leading-loose">
            AI 360: Driving Innovations Across Industries, Healthcare, Research
            and Education-2025 (AIIHRE2K25)
          </h4>
          <p className="mt-4 text-justify text-xl leading-8 max-w-4xl mx-auto">
            AIIHRE2K25 conference offers rapid advancements in Artificial
            Intelligence (AI) that are reshaping various sectors, including
            higher education. This international conference, titled "Integration
            of Artificial Intelligence in Higher Engineering Education:
            Transforming Teaching, Learning, and Research," aims to explore the
            transformative impact of AI technologies on engineering education.
            The conference will bring together educators, researchers, industry
            experts, and policymakers to discuss innovative AI applications,
            share best practices, and address the challenges associated with AI
            integration in higher engineering institutions.
          </p>
          <div className="flex justify-center mt-10">
            <a
              className="bg-[#bcc4e3] hover:bg-[#a8b0d0] text-black px-8 py-4 text-xl rounded-lg transition-all duration-300"
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FCRM2024"
              target="_blank"
            >
              Paper Submission Link
            </a>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div id="speakers" className="mt-10 bg-[#e7ecfa]">
        <KeynoteSpeakers />
        <OrganizingCommittee />
      </div>
      {/* Schedule Section */}
      <div className="container mx-auto px-4 pt-2">
        <div className="my-8" id="schedule">
          <h1 className="text-4xl text-center mt-5 mb-4">
            <span className="text-yellow-500">Event</span>{" "}
            <span className="text-green-500">Schedule</span>
          </h1>
          <hr />

          <div className="md:flex justify-center gap-28 mt-8">
            {[
              {
                day: "Day1",
                date: "May 27, 2025",
                desc: " Track 1 & Track 2",
              },
              {
                day: "Day2",
                date: "May 28, 2025",
                desc: " Track 3 & Track 4",
              },
            ].map((schedule, index) => (
              <Link
                to={`schedule/${schedule.day}`}
                className="text-blue-500 mt-4 block hover:text-blue-600"
              >
                <div key={index} className="w-full max-w-sm">
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-4xl mb-4 text-blue-600">
                      {
                        [
                          <FaCalendarDay />,
                          <FaCalendarAlt />,
                          <FaCalendarWeek />,
                        ][index]
                      }
                    </div>
                    <h3 className="text-xl font-bold mb-2">{schedule.day}</h3>
                    <p className="text-gray-600 font-semibold">
                      <time>{schedule.date}</time>
                      {schedule.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
