import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import advisor1 from "../images/speaker1.jpeg";
import { useEffect } from "react";

const AdvisoryCommittee = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTop();
  }, []);
  const advisors = [
    {
      name: "Dr. Ashok K. Chauhan",
      title: "Hon'ble Founder President, RBEF",
      image: advisor1,
    },
    {
      name: "Dr. Aseem Chauhan",
      title: "Hon'ble Chancellor & Chairman, Amity University Madhya Pradesh",
      image: advisor1,
    },
    {
      name: "Lt. Gen. V.K. Sharma, AVSM (Retd.)",
      title: "Hon'ble Pro-Chancellor, Amity University Madhya Pradesh",
      image: advisor1,
    },
    {
      name: "Prof. (Dr.) R.S. Tomar",
      title:
        "Hon'ble Vice Chancellor (Officiating), Amity University Madhya Pradesh",
      image: advisor1,
    },
    {
      name: "Prof. (Dr.) M.P. Kaushik",
      title: "Hon'ble Pro-Vice Chancellor (R), Amity University Madhya Pradesh",
      image: advisor1,
    },
    {
      name: "Prof. (Dr.) Vikas Thada",
      title: "Director (Officiating), Amity School of Engineering & Technology",
      image: advisor1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advisory Committee</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="w-36 h-36 mx-auto mb-4 relative">
                  {/* Increased size of image container */}
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full rounded-full object-cover border-4 border-blue-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{advisor.title}</p>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryCommittee;
