import React from "react";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTop();
  }, []);
  const leadershipData = [
    {
      title: "Patron-in-Chief",
      name: "Dr. Ashok K. Chauhan",
      designation: "Hon'ble Founder President, RBEF",
    },
    {
      title: "Patron",
      name: "Dr. Aseem Chauhan",
      designation:
        "Hon'ble Chancellor & Chairman, Amity University Madhya Pradesh",
    },
    {
      title: "Co-Patron",
      name: "Lt. Gen. V.K. Sharma, AVSM (Retd.)",
      designation: "Hon'ble Pro-Chancellor, Amity University Madhya Pradesh",
    },
    {
      title: "Chairperson",
      name: "Prof. (Dr.) R.S. Tomar",
      designation:
        "Vice Chancellor (Officiating), Amity University Madhya Pradesh",
    },
    {
      title: "Co-Chairperson",
      name: "Prof. (Dr.) M.P. Kaushik",
      designation: "Pro-Vice Chancellor (R), Amity University Madhya Pradesh",
    },
    {
      title: "Convener",
      name: "Prof. (Dr.) Vikas Thada",
      designation: "Director (Officiating), ASET",
    },
  ];

  return (
    <div className="bg-[#f4f6fb] px-4 sm:px-6 lg:px-20 mt-20">
      {/* Hero Section */}
      <section className="bg-[#8495bc] text-white text-center py-16 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            AI 360: Driving Innovations Across Industries, Healthcare, Research
            and Education-2025(AIIHRE2K25)
          </h1>
        </div>
      </section>

      {/* About Amity University Section */}
      <section className="bg-white my-6 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Amity University Madhya Pradesh, Gwalior
        </h2>
        <h3 className="text-xl font-bold text-gray-700 mb-4">About Campus</h3>
        <div className="space-y-4 text-gray-600 text-justify">
          <p>
            Amity University Madhya Pradesh (AUMP) was established by Ritnand
            Balved Education Foundation (RBEF) at Gwalior by Madhya Pradesh Niji
            Vishwavidyalaya (Sthapna Avam Sanchalan) Adhiniyam – 2007 and
            Dwitiya Sanshodhan Adhiniyam (No. 27 of 2010) vide State Government
            Notification No. 7692-406 dated 30 Dec 2010, with the view to
            promote professional, industry-oriented education in the state of
            Madhya Pradesh.
          </p>
          {/* Note: Continue with all paragraphs similarly */}
        </div>
      </section>

      {/* About ASET Section */}
      <section className="bg-white my-6 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Amity School of Engineering & Technology
        </h2>
        <h3 className="text-xl font-bold text-gray-700 mb-4">
          About Institute
        </h3>
        <div className="space-y-4 text-gray-600 text-justify">
          <p>
            Amity School of Engineering & Technology at Amity University Madhya
            Pradesh was established on July 2011 by Ritnand Balved Education
            Foundation (RBEF), New Delhi, which is a society registered under
            the Societies Registration Act, 1860 and was established with the
            view to promote professional, industry-oriented education in the
            state of Madhya Pradesh.
          </p>
          {/* Continue with other paragraphs */}
        </div>
      </section>

      {/* About Conference Section */}
      <section className="bg-white my-6 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-4">
          About Conference
        </h3>
        <div className="text-gray-600 text-justify">
          <p>
            The International Conference on "AI 360: Driving Innovations Across
            Industries, Healthcare, Research and Education-2025 (AIIHRE2K25)" is
            to provide a comprehensive platform for exploring the transformative
            potential of Artificial Intelligence (AI) across diverse domains.
          </p>
          {/* Continue with other text */}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="text-center my-6 p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">
          Conference Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {leader.title}
              </h3>
              <p className="text-gray-800 mb-2">{leader.name}</p>
              <span className="text-sm text-gray-600">
                {leader.designation}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8495bc] text-white py-8 mt-8 rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="mb-2">Amity University Madhya Pradesh</p>
            <p className="mb-2">
              Gwalior Airport Road, Maharajpura, Gwalior - 474005
            </p>
            <p className="mb-2">Email: info@amity.edu</p>
            <p>Phone: +91-123-4567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
