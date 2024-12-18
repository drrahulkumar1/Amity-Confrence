const professors = [
    {
      name: "Dr. Emily Chen",
      image: "src/images/pro1.webp",
      designation: "Professor of Computer Science",
      description:
        "Renowned expert in machine learning and artificial intelligence",
    },
    {
      name: "Dr. Michael Rodriguez",
      image: "src/images/pro2.webp",
      designation: "Associate Professor of Biology",
      description: "Specializes in molecular genetics and cellular biology",
    },
    {
      name: "Dr. Sarah Thompson",
      image: "src/images/pro3.webp",
      designation: "Professor of Physics",
      description:
        "Quantum physics researcher with expertise in quantum computing",
    },
    {
      name: "Dr. James Wong",
      image: "src/images/pro4.jpg",
      designation: "Professor of Mathematics",
      description:
        "Leading expert in algebraic topology and mathematical modeling",
    },
    {
      name: "Dr. Emily Chen",
      image: "src/images/pro5.jpg",
      designation: "Professor of Computer Science",
      description:
        "Renowned expert in machine learning and artificial intelligence.",
    },
    {
      name: "Dr. Michael Rodriguez",
      image: "src/images/pro6.jpg",
      designation: "Associate Professor of Biology",
      description: "Specializes in molecular genetics and cellular biology",
    },
    {
      name: "Dr. Sarah Thompson",
      image: "src/images/pro7.jpg",
      designation: "Professor of Physics",
      description:
        "Quantum physics researcher with expertise in quantum computing",
    },
    {
      name: "Dr. James Wong",
      image: "src/images/pro8.jpg",
      designation: "Professor of Mathematics",
      description:
        "Leading expert in algebraic topology and mathematical modeling",
    },
  ];
  
  const ProfessorGrid = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professors.map((professor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={professor.image}
                alt={professor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {professor.name}
                </h2>
                <h3 className="text-lg text-gray-600 mb-4">
                  {professor.designation}
                </h3>
                <p className="text-gray-500">{professor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfessorGrid;