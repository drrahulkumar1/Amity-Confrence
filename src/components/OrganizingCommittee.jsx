import oc1 from "../images/oc1.jpg";
import oc2 from "../images/oc2.jpg";
import oc3 from "../images/oc3.jpg";
import oc4 from "../images/oc4.jpg";
import oc5 from "../images/oc5.jpg";
const OrganizingCommittee = () => {
  const members = [
    {
      name: "Prof. (Dr.) Vikas Thada",
      title: "Professor",
      affiliation:
        "Amity School of Engineering and Technology, Amity University Madhya Pradesh, Gwalior",
      image: oc1,
    },
    {
      name: "Dr.Ashok Kumar",
      title: "Associate Professor",
      affiliation:
        "Amity School of Engineering and Technology, Amity University Madhya Pradesh, Gwalior",
      image: oc2,
    },
    {
      name: "Dr. Rahul Kumar",
      title: "Associate Professor",
      affiliation:
        "Amity School of Engineering and Technology, Amity University Madhya Pradesh, Gwalior",
      image: oc3,
    },
    {
      name: "Dr.A.Daniel",
      title: "Associate Professor",
      affiliation:
        "Amity School of Engineering and Technology, Amity University Madhya Pradesh, Gwalior",
      image: oc4,
    },
    {
      name: "Dr.Jhankar Moolchandani",
      title: "Assistant Professor",
      affiliation:
        "Amity School of Engineering and Technology, Amity University Madhya Pradesh, Gwalior",
      image: oc5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        Organizing Committee
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.title}</p>
              <p className="text-sm text-gray-500">{member.affiliation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingCommittee;
