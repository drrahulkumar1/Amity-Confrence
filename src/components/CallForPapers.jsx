import React from "react";

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <header className="text-center py-8 bg-white rounded-lg shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            AI 360: Driving Innovations Across Industries, Healthcare, Research
            and Education-2025 (AIIHRE2K25)
          </h2>
          <p className="text-lg font-semibold text-gray-700">
            Date: 28th & 29th May 2025 | Hybrid Mode
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Call for Papers
            </h3>
            <p className="text-gray-600">
              Artificial Intelligence (AI) continues to reshape the world,
              driving breakthroughs across industries, healthcare, research, and
              education. AIIHRE2K25 invites researchers, practitioners, and
              innovators to submit cutting-edge work that explores the
              transformative power of AI and its far-reaching impacts.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Conference Themes
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: "AI in Industry",
                  items: [
                    "Autonomous systems and robotics",
                    "AI in manufacturing, supply chain, and logistics",
                    "Smart cities and IoT",
                    "Financial technologies and risk assessment",
                    "AI for sustainability and environmental management",
                  ],
                },
                {
                  title: "AI in Healthcare",
                  items: [
                    "AI-powered diagnostics and therapeutics",
                    "Predictive analytics and personalized medicine",
                    "Natural language processing for clinical data",
                    "Ethical AI in healthcare",
                    "Innovations in telemedicine and digital health",
                  ],
                },
                {
                  title: "AI in Research and Academia",
                  items: [
                    "Machine learning for fundamental science",
                    "AI-driven tools for research acceleration",
                    "AI ethics, bias, and fairness in academia",
                    "Enhancing reproducibility with AI",
                    "Open-source AI for education and innovation",
                  ],
                },
                {
                  title: "AI in Education",
                  items: [
                    "Personalized and adaptive learning systems",
                    "AI-powered virtual classrooms",
                    "Assessment and feedback automation",
                    "Democratizing education with AI",
                    "AI's role in lifelong learning and skill development",
                  ],
                },
              ].map((theme, index) => (
                <li key={index} className="space-y-2">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {theme.title}
                  </h4>
                  <ul className="ml-6 space-y-1">
                    {theme.items.map((item, i) => (
                      <li key={i} className="text-gray-600 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Important Dates
            </h3>
            <ul className="space-y-2 text-gray-600 ml-5">
              <li className="list-decimal">
                Abstract Submission Deadline: Not Decided
              </li>
              <li className="list-decimal">
                Acceptance Notification: Not Decided
              </li>
              <li className="list-decimal">
                Full Paper Submission Deadline: Not Decided
              </li>
              <li className="list-decimal">
                Conference Date: 28th & 29th May 2025
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Submission Guidelines
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                1. Authors are invited to submit their abstracts and full paper
                via CMT
              </li>
              <li>2. All submissions must follow the Springer template.</li>
              <li>
                3. Papers must be original, unpublished, and not under review
                elsewhere.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Fee
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-4 text-left">
                      Category
                    </th>
                    <th className="border border-gray-200 p-4 text-left">
                      Indian
                    </th>
                    <th className="border border-gray-200 p-4 text-left">
                      Foreign
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-4">
                      For Research Scholars
                    </td>
                    <td className="border border-gray-200 p-4">Rs. 3500+GST</td>
                    <td className="border border-gray-200 p-4">$100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-4">
                      For Academicians
                    </td>
                    <td className="border border-gray-200 p-4">Rs. 4000+GST</td>
                    <td className="border border-gray-200 p-4">$120</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-4">Participant</td>
                    <td className="border border-gray-200 p-4">Rs. 1000</td>
                    <td className="border border-gray-200 p-4">$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600">
              Payment can be made through the link:{" "}
              <a
                href="https://amity.edu/gwalior/paymentgateway/ICAI2024"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                AIHEITTLR 2024 Payment Gateway
              </a>
            </p>
          </section>
        </div>

        <footer className="text-center py-6 bg-white rounded-lg shadow-sm mb-8">
          <p className="text-gray-600">
            For more details, contact: 7303-872-872
          </p>
          <p className="text-gray-600">
            © 2025 Amity University, Madhya Pradesh
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CallForPapers;
