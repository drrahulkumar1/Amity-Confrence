import '../styles/TechAdCom.css'; // Assuming you have an external CSS file

const TechnicalAdvisoryComittee = () => {
  const csvData = [
        ['S.No', 'Name', 'Designation', 'Affiliation', 'Mail ID'],
    ['1', 'Prof. (Dr.) Raghuraj Singh', 'Professor', 'Harcourt Butler Technical University, Kanpur, India', 'raghurajsingh@rediffmail.com'],
    ['2', 'Prof. (Dr.) Mohd Zubair Khan', 'Professor', 'Department of Computer Science and Information, Taibah University, Madinah, Saudi Arabia', 'mkhanb@taibahu.edu.sa'],
    ['3', 'Prof. (Dr.) Karamjit Bhatia', 'HOD & Professor', 'Department of Computer Science, Gurukula Kangri Deemed to University, Haridwar, India', 'kbhatia@gkv.ac.in'],
    ['4', 'Prof. (Dr.) Ravinder Singh', 'HOD & Associate Professor', 'Faculty of Engineering & Technology, MJP Rohilkhand University, Bareilly, UP, India', 'r.singh@mjpru.ac.in'],
    ['5', 'Prof. (Dr.) Saurabh Singh', 'Professor', 'Galgotias University, Greater Noida, India', 'saurabh.iiet@gmail.com'],
    ['6', 'Prof. (Dr.) Sanjeev Kumar', 'Professor', "Tula's Institute, Dehradun, India", 'drsanjeevsolanki@gmail.com'],
    ['7', 'Prof. (Dr.) Sanjay Gour', 'HOD & Professor', 'Gandhinagar Institute of Computer Science, Gandhinagar University, Gandhinagar, Gujarat, India', 'gour.drsanjay@gmail.com'],
    ['8', 'Prof. (Dr.) Suhail Javed Quraishi', 'HOD & Professor', 'Manav Rachna International Institute of Research and Studies, Faridabad, Haryana, India', 'suhailjaved.sca@mriu.edu.in'],
    ['9', 'Prof. (Dr.) Durgesh Srivastava', 'Professor', 'Chitkara University, Punjab, India', 'drdkumar.ptu@gmail.com'],
    ['10', 'Prof. (Dr.) Sachin Malik', 'Professor', 'Department of IT, DIT University, Dehradun, India', 'sachin.malik@dit.edu.in'],
    ['11', 'Prof. (Dr.) Prakash Jha', 'Professor', 'Department of CSE, Chandigarh University, Punjab, India', 'prakash.jha@cuchd.in'],
    ['12', 'Prof. (Dr.) Priyanka Gupta', 'Professor', 'Department of CSE, Manipal University, Bangalore, India', 'priyanka.gupta@manipal.edu.in'],
    ['13', 'Prof. (Dr.) Vivek Singh', 'Professor', 'Department of CSE, UPES, Dehradun, India', 'vivek.singh@upes.edu.in'],
    ['14', 'Dr. Jaspreet Singh Batth', 'Professor', 'Department of CSE, Chandigarh University, Punjab, India', 'jaspreet.e10279@cumail.in']
  ];

  return (
    <div className="table-container">
      <h1 className="table-title">Technical Advisory Committee</h1>
      <CSVTable data={csvData} />
    </div>
  );
};

function CSVTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = data[0];
  const rows = data.slice(1);

  return (
    <div className="table-wrapper">
      <table className="styled-table">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </div>
  );
}

function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody({ rows }) {
  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TechnicalAdvisoryComittee;

