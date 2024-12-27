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
            Madhya Pradesh. Amity University Madhya Pradesh, Gwalior located on
            a sprawling campus of 102 acres of land opposite Gwalior Airport,
            imparts modern, practical and research-oriented courses which lead
            to the development of professionals who are employable and industry
            ready. This in turn drives the socio-economic upliftment of the
            region.
          </p>
          <p>
            Amity University Madhya Pradesh (AUMP) imparts education in almost
            all areas including management, engineering, architecture,
            biotechnology, law, Journalism & mass communication, behavioral
            science, Psychology, fashion, Political Science, Pharmacy etc.
          </p>
          <p>
            AUMP has state of the art infrastructure with modern amenities which
            matches with the best across the country and is of international
            standards. The whole campus is wi-fi enabled. Electricity is
            available 24X7 and all the buildings are air conditioned.
          </p>
          <p>
            The university has its own intranet named AMIZONE (Acronym for Amity
            Intranet Zone), which is equipped to store all the academics and
            administrative data of the university, thus promoting
            digitalization. Session Plans, Lesson Plans, Examination Details,
            Fee Details, Payment Details, Attendance Report, Grievance
            Redressal, and other administrative details are all available
            through AMIZONE. The students can access study materials and
            tutorials anytime, anywhere which is a step towards beyond class
            room teaching. Mentor Mentee systems are in placed in the campus
            with an objective of mentoring and recognizing the potential of
            students and help improve their self-esteem and confidence. Apart
            from this trained counsellors have been appointed to provide prompt
            assistance on issues related to health and emotional wellness.
          </p>
          {/* Additional paragraphs from UpdatedAbout.jsx */}
          <p>
            The courses offered by AUMP are evaluated regularly to achieve the
            course objectives based on the feedback on placement, employability
            and latest development in technology to keep pace with the changing
            times. Faculties and students of AUMP are encouraged to carry out
            industry oriented cutting edge research work in the university. The
            faculties of AUMP have been successful in getting several sponsored
            projects from various state and national funding agencies.
          </p>
          <p>
            Grooming and etiquette, Communication Enhancement Classes,
            Behavioural Science, One Foreign Language, Pre-placement Training
            Classes, and Aptitude Training Classes are a part of curriculum,
            which helps in overall development of the students. The University
            offers a Choice Based Credit System, wherein a student can select
            any one of the 38 minor tracks across discipline.
          </p>
          <p>
            In terms of placement, AUMP has consistently achieved outstanding
            results, with an average annual campus placement rate exceeding 90%
            over the past five years (2018-2019, 2019-2020, 2020-2021,
            2021-2022, and 2022-2023). Notably, the highest annual CTC offered
            last year was INR 14.95 Lac by CISCO, and this year, it has reached
            INR 34.5 Lac PA, offered by COMMVAULT. The average annual CTC
            package has also seen a remarkable 20% improvement compared to the
            previous year.
          </p>
          {/* Continue with all other paragraphs from UpdatedAbout.jsx... */}
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
          <p>
            Amity School of Engineering & Technology (ASET) is committed to
            producing industry-ready professionals through a blend of
            theoretical knowledge and practical experience. With a strong
            emphasis on innovation, emerging technologies, and research, ASET
            leads in engineering education in Madhya Pradesh.
          </p>
          <p>
            Amity School of Engineering and Technology Gwalior offers a wide
            range of UG and PG programmes. All our courses within the programmes
            prepare the students to be industry oriented and increase their
            employability. The teaching pedagogy used within curriculum enhances
            learning and orients students to have an analytical as well
            research-oriented outlook towards business world.
          </p>
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
            This conference aims to bring together academics, researchers,
            industry leaders, healthcare professionals, and educators to
            exchange knowledge, foster collaboration, and share innovative
            solutions driven by AI technologies. The conference seeks to
            highlight the latest advancements and real-world applications of AI
            in improving industrial processes, enhancing healthcare outcomes,
            advancing cutting-edge research, and revolutionizing education. It
            aims to address pressing challenges such as ethical considerations,
            data privacy, and equitable access while promoting responsible AI
            development and deployment. Furthermore, the conference aims to
            empower policymakers, educators, and practitioners with insights to
            shape the future of AI-driven innovations, ensuring their
            sustainable and ethical implementation.
          </p>
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
