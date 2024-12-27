import React from "react";
import { useEffect } from "react";

const TechnicalAdvisoryCommittee = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
    scrollToTop();
  }, []);
  const csvData = [
    ["S.No", "Name", "Designation", "Affiliation", "Mail ID"],
    [
      "1",
      "Prof. (Dr.) Raghuraj Singh",
      "Professor",
      "Harcourt Butler Technical University, Kanpur, India",
      "raghurajsingh@rediffmail.com",
    ],
    [
      "2",
      "Prof. (Dr.) Mohd Zubair Khan",
      "Professor",
      "Department of Computer Science and Information, Taibah University, Madinah, Saudi Arabia",
      "mkhanb@taibahu.edu.sa",
    ],
    [
      "3",
      "Prof. (Dr.) Karamjit Bhatia",
      "HOD & Professor",
      "Department of Computer Science, Gurukula Kangri Deemed to University, Haridwar, India",
      "kbhatia@gkv.ac.in",
    ],
    [
      "4",
      "Prof. (Dr.) Ravinder Singh",
      "HOD & Associate Professor",
      "Faculty of Engineering & Technology, MJP Rohilkhand University, Bareilly, UP, India",
      "r.singh@mjpru.ac.in",
    ],
    [
      "5",
      "Prof. (Dr.) Saurabh Singh",
      "Professor",
      "Galgotias University, Greater Noida, India",
      "saurabh.iiet@gmail.com",
    ],
    [
      "6",
      "Prof. (Dr.) Sanjeev Kumar",
      "Professor",
      "Tula's Institute, Dehradun, India",
      "drsanjeevsolanki@gmail.com",
    ],
    [
      "7",
      "Prof. (Dr.) Sanjay Gour",
      "HOD & Professor",
      "Gandhinagar Institute of Computer Science, Gandhinagar University, Gandhinagar, Gujarat, India",
      "gour.drsanjay@gmail.com",
    ],
    [
      "8",
      "Prof. (Dr.) Suhail Javed Quraishi",
      "HOD & Professor",
      "Manav Rachna International Institute of Research and Studies, Faridabad, Haryana, India",
      "suhailjaved.sca@mriu.edu.in",
    ],
    [
      "9",
      "Prof. (Dr.) Durgesh Srivastava",
      "Professor",
      "Chitkara University, Punjab, India",
      "drdkumar.ptu@gmail.com",
    ],
    [
      "10",
      "Prof. (Dr.) Sachin Malik",
      "Professor",
      "Department of IT, DIT University, Dehradun, India",
      "sachin.malik@dit.edu.in",
    ],
    [
      "11",
      "Prof. (Dr.) Prakash Jha",
      "Professor",
      "Department of CSE, Chandigarh University, Punjab, India",
      "prakash.jha@cuchd.in",
    ],
    [
      "12",
      "Prof. (Dr.) Priyanka Gupta",
      "Professor",
      "Department of CSE, Manipal University, Bangalore, India",
      "priyanka.gupta@manipal.edu.in",
    ],
    [
      "13",
      "Prof. (Dr.) Vivek Singh",
      "Professor",
      "Department of CSE, UPES, Dehradun, India",
      "vivek.singh@upes.edu.in",
    ],
    [
      "14",
      "Dr. Jaspreet Singh Batth",
      "Professor",
      "Department of CSE, Chandigarh University, Punjab, India",
      "jaspreet.e10279@cumail.in",
    ],
    [
      "15",
      "Prof. (Dr.) Senthil Murugan Nagarajan",
      "PDF Researcher	",
      "Faculty of Science, Technology, and Medicine, University of Luxembourg, Luxembourg",
      "senthil.nagarajan@uni.lu",
    ],
  ];

  const TableHeader = ({ headers }) => (
    <thead className="bg-emerald-600 text-white">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className="px-4 py-3 text-left font-bold border border-gray-200"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );

  const TableBody = ({ rows }) => (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-100 even:bg-gray-50">
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="px-4 py-3 border border-gray-200">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">
        Technical Advisory Committee
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <TableHeader headers={csvData[0]} />
          <TableBody rows={csvData.slice(1)} />
        </table>
      </div>
    </div>
  );
};

export default TechnicalAdvisoryCommittee;
