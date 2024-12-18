import React from "react";
import "../styles/OrganizingCommittee.css"; // Import the styles

const committeeData = [
  {
    title: "Secretary",
    members: ["Prof. (Dr.) Hemant Kr. Soni"],
  },
  {
    title: "Co-Secretary",
    members: ["Dr. Anuj Kumar Singh"],
  },
  {
    title: "Co-Convener",
    members: ["Dr. Rahul Kumar", "Dr. Ashok Kumar"],
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
    members: ["Dr. Kapil Sharma", "Dr. D.K Mishra", "Dr. Madhavi Dhingra", "Dr. Mahakavi P."],
  },
  {
    title: "Anchoring",
    members: ["Mrs. Rinkoo Bhaa", "Ms. Nishtha Parashar"],
  },
  {
    title: "Outcome Report",
    members: ["Dr. Ghanshyam P Dubey", "Dr. Jhankar Moolchandani", "Ms. Anshita Shukla"],
  },
  {
    title: "Publication",
    members: ["Dr. Ripunjoy Gogoi", "Dr. Rajeev Goyal", "Dr. Samta Jain", "Dr. Anurag Tomer"],
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
  <div className="committee-card">
    <h3 className="committee-title">{title}</h3>
    <ul>
      {members.map((member, index) => (
        <li key={index}>{member}</li>
      ))}
    </ul>
  </div>
);

const OrganizingCommittee = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px", color: "#34495e" }}>
        Organizing Committee
      </h2>
      <div className="committee-grid">
        {committeeData.map((committee, index) => (
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

export default OrganizingCommittee;
