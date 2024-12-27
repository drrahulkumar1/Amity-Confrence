import { useEffect } from "react";

const programData = [
  {
    title: "Organizing Committee",
    members: [
      "Prof. (Dr.) Vikas Thada",
      "Dr. Rahul Kumar",
      "Dr.A.Daniel",
      "Dr.Ashok Kumar",
      "Dr.Jhankar Moolchandani",
    ],
  },
  {
    title: "Technical Program",
    members: ["Dr. Manish Gupta", "Dr. Santosh Sahu", "Mr. Gaurav Sharma"],
  },
  {
    title: "Promotion",
    members: [
      "Dr. Deepak Motwani",
      "Dr. Ajay Kumar Dadoriya",
      "Dr. Vikrant Chole",
      "Dr. Ashish Singh Pareta",
      "Mr. Lokendra Sharma",
    ],
  },
  {
    title: "Finance",
    members: [
      "Dr. Ashok Shrivastava",
      "Ms. Shradha Dubey",
      "Dr. Shyam Sunder Gupta",
      "Dr. Saurabh Agarwal",
      "Mr. Sandeep Gupta",
    ],
  },
  {
    title: "IT Support",
    members: [
      "Dr. Kapil Sharma",
      "Dr. D.K Mishra",
      "Dr. Madhavi Dhingra",
      "Dr. Mahakavi P.",
    ],
  },
  {
    title: "Anchoring",
    members: ["Mrs. Rinkoo Bhaa", "Ms. Nishtha Parashar"],
  },
  {
    title: "Outcome Report",
    members: [
      "Dr. Ghanshyam P Dubey",
      "Dr. Jhankar Moolchandani",
      "Ms. Anshita Shukla",
    ],
  },
  {
    title: "Publication",
    members: [
      "Dr. Ripunjoy Gogoi",
      "Dr. Rajeev Goyal",
      "Dr. Samta Jain",
      "Dr. Anurag Tomer",
    ],
  },
  {
    title: "Registration",
    members: ["Dr. A. Daniel", "Dr. Arvind Kr. Upadhyay"],
  },
  {
    title: "Purchase",
    members: ["Mr. Ashish Tripathi", "Mr. Manish Khule"],
  },
];
const CommitteeCard = ({ title, members }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-1">
    <h3 className="text-xl text-[#34495e] border-b-2 border-[#3498db] pb-2 mb-3 text-center font-semibold">
      {title}
    </h3>
    <ul className="list-none p-0 m-0">
      {members.map((member, index) => (
        <li key={index} className="text-gray-600 my-1 text-center">
          {member}
        </li>
      ))}
    </ul>
  </div>
);

const InternalProgramCommittee = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTop();
  }, []);
  return (
    <div className="bg-[#f4f6fb] min-h-screen">
      <h2 className="text-center text-[#34495e] text-3xl font-bold py-8">
        Internal Program Committee
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {programData.map((committee, index) => (
          <CommitteeCard
            key={index}
            title={committee.title}
            members={committee.members}
          />
        ))}
      </div>
    </div>
  );
};

export default InternalProgramCommittee;
