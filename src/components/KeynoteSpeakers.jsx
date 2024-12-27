import React from "react";

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. (Dr.) Tanmoy Som",
      title: "Professor",
      affiliation:
        "Dept. of Mathematical Sciences, Indian Institute of Technology (Banaras Hindu University), Varanasi",
      image: "/src/images/speaker1.jpeg",
    },
    {
      name: "Prof. (Dr.) Karm Veer Arya",
      title: "Professor",
      affiliation:
        "Coordinator, Multimedia and Information Security Research Group, IIIT, Gwalior.",
      image: "/src/images/speaker2.jpeg",
    },
    {
      name: "Prof. (Dr.) Gautam Srivastava",
      title: "Professor",
      affiliation:
        "Department of Mathematics & Computer Science, Brandon University, Brandon, MB, Canada",
      image: "/src/images/speaker3.jpeg",
    },
    {
      name: "Prof. (Dr.)Lenin Babu Russeliah",
      title: "Data Scientist",
      affiliation:
        "Product Engineering Manager ConverSight Columbus, Indiana, United States",
      image: "/src/images/speaker4.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-4xl font-bold text-center mb-12">Keynote Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{speaker.name}</h3>
              <p className="text-gray-600 mb-2">{speaker.title}</p>
              <p className="text-sm text-gray-500">{speaker.affiliation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;