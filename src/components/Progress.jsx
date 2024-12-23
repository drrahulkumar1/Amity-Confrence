import '../styles/Technicalcommittee.css'; // Assuming you have an external CSS file

const TechnicalComittee = () => {
  const csvData = [
    ['S.No', 'Name', 'Designation', 'Affiliation', 'Mail ID'],
    ['1', 'Dr. Kulvinder Singh', 'Assistant Professor', 'Baba Farid College of Engineering & Technology, Bathinda, Punjab', 'Kulvinder.hundal@gmail.com'],
    ['2', 'Dr. Ankur Goyal', 'Associate Professor', 'Symbiosis Institute of Technology, Pune', 'ankur.goyal@sitpune.edu.in'],
    ['3', 'Dr. Mohammad Ishrat', 'Associate Professor', 'Department of CSE, Vaddeshwaram, Guntur', 'ishratzgzp@gmail.com'],
    ['4', 'Dr. Shakti Kundu', 'Associate Professor', 'BML Munjal University (BMU), Gurugram, Haryana', 'shaktikundu@gmail.com'],
    ['5', 'Prof. Suresh R. Jajoo', 'Assistant Professor', 'Datta Meghe College of Engineering (Mumbai University)', 'suresh.jajoo@dmce.ac.in'],
    ['6', 'Dr. Penubaka Balaji', 'Assistant Professor', 'K L University, Guntur', 'pbalaji@kluniversity.in'],
    ['7', 'MD Shamsul Haque Ansari', 'Assistant Professor', 'K L University, Vijayawada', 'shamsshamsul@gmail.com'],
    ['8', 'Dr. M. Ravi Sankar', 'Associate Professor', 'K L University, Guntur', 'mravisankar@kluniversity.in'],
    ['9', 'Dr. Abhishek Kumar Pandey', 'Associate Professor', 'Chandigarh University', 'abhishek.e17100@cumail.in'],
    ['10', 'Dr. Preeti Khera', 'Associate Professor', 'Chandigarh University', 'preeti.e17576@cumail.in'],
    ['11', 'Dr. Prabhjot Kaur', 'Assistant Professor', 'Chandigarh University', 'prabhjot.e16646@cumail.in'],
    ['12', 'Dr. Richa Singh', 'Assistant Professor', 'KIET Group of Institutions, Ghaziabad', 'rsrinet.876@gmail.com'],
    ['13', 'Dr. Gaurav Srivastav', 'Assistant Professor', 'KIET Group of Institutions, Ghaziabad', 'gauravsrivastav2507@gmail.com'],
    ['14', 'Dr. Umang Garg', 'Associate Professor and Research Coordinator', 'MITADT University, Pune', 'umangarg@gmail.com'],
    ['15', 'Basant Sah', 'Associate Professor', 'Koneru Lakshmaiah Education Foundation, Guntur, AP', 'basantbitmtech2008@gmail.com'],
    ['16', 'Dr. Mahadev', 'Associate Professor', 'Chandigarh University', 'Mahadev.agra@gmail.com'],
    ['17', 'Dr. Kapil Aggarwal', 'Associate Professor', 'Koneru Lakshmaiah Education Foundation, Vaddeswaram, Guntur District, AP', 'kapil594@gmail.com'],
    ['18', 'Dr. Konatham Sumalatha', 'Assistant Professor Sr. Gr', 'School of Computer Science and Engineering, Vellore Institute of Technology', 'konatham.sumalatha@vit.ac.in'],
    ['19', 'Dr. Krishna Kumar', 'Professor', 'Institute of Technology & Management, GIDA, Gorakhpur 273001', 'kk_gkp@rediffmail.com'],
    ['20', 'Dr. Wasim Khan', 'Assistant Professor', 'KL University', 'khanwasim051@gmail.com'],
    ['21', 'Priyajit Dash', 'Assistant Professor', 'Rajasthan Technical University, Kota', 'dash.priyajit@gmail.com'],
    ['22', 'Dr. Anoop Kumar Tiwari', 'Assistant Professor', 'Department of Computer Science and IT, Central University of Haryana', 'dranoop@cuh.ac.in'],
    ['23', 'Dr. Vinay Kumar Singh', 'Professor', 'Lovely Professional University', 'vks.vinaykumarsingh@gmail.com'],
    ['24', 'Dr. Parul Datta', 'Assistant Professor', '-', 'parul.e17144@cumail.in'],
    ['25', 'Dr. Navjyot Kaur', 'Assistant Professor', 'Chandigarh University, Mohali', 'navjyot16.kaur@gmail.com'],
    ['26', 'Dr. Raj Kumar', 'Associate Professor', 'Dept. of CSE, Chandigarh University', 'rajshira@gmail.com'],
    ['27', 'Prof. Vineet Mehan', 'Professor', 'AIML Department, NIET, Nims University Rajasthan', 'vineet.mehan@nimsuniversity.org'],
    ['28', 'Dr. Amit Kumar Goyal', 'Professor', 'Chandigarh University', 'athroam@gmail.com'],
    ['29', 'Aneesh Kumar Mishra', 'Assistant Professor CSE', 'JECRCU, Jaipur', 'aneeshjuetphdcse2k19@gmail.com'],
    ['30', 'Amit Verma', 'Assistant Professor', 'DR. K N Modi University, Rajasthan', 'amit.cse@dknmu.org'],   ['31', 'Dr. Vipin Jain', 'Assistant Professor', 'VIT Bhopal University', 'er.vipinjain@gmail.com'],
    ['32', 'Rudramani Bhutia', 'Assistant Professor', 'Koneru Lakshmiah Educational Foundation (K L University)', 'rudra.kuna@mail.com'],
    ['33', 'Dr. Sourav Pramanik', 'Assistant Processor', 'New Alipore College', 'souravpramanik@newaliporecollege.ac.in'],
    ['34', 'Dr. Mudit Saxena', 'Asst. Professor', 'Teerthanker Mahaveer University, Moradabad', 'mudit051285@gmail.com'],
    ['35', 'Dr. Bhavani Sankar Panda', 'Professor & HoD AI ML', 'Dept. of CSE, Raghu Engineering College (Autonomous), Vizianagaram, Andhra Pradesh', 'bspanda.cse@gmail.com'],
    ['36', 'Asesh Kumar Tripathy', 'Assistant Professor', 'Dept. of CSE, KLEF-Deemed to be University, Vijayawada, Andhra Pradesh', 'asesh.tripathy@gmail.com'],['37', 'Dr. Raghwendra Kishore Singh', 'Assistant Professor', 'School of Computer Science & Artificial Intelligence, SR University, Warangal, Telangana', 'raghwendra@sru.edu.in'],['38', 'Dr. Pramoda Patro', 'Associate Professor', 'School of Computer Science & Artificial Intelligence, SR University, Warangal, Telangana', 'Pramoda.patro@sru.edu.in'],['39', 'Shanker Chandre', 'Assistant Professor', 'School of Computer Science & Artificial Intelligence, SR University, Warangal, Telangana', 'Shanker.chandre@gmail.com'],['40', 'Dr. Sasanko Sekhar Gantayat', 'Associate Professor', 'School of Computer Science & Artificial Intelligence, SR University, Warangal, Telangana', 's.gantayat@sru.edu.in'],['41', 'Dr. Shubham Kumar', 'Assistant Professor', '-', 'shubham1d1kumar@gmail.com'],
    ['42', 'Prof. (Dr.) Kuldeep Tomar', 'Professor-CSE & Dean Academics', 'NGFCET, Affiliated to JC Bose University YMCA Faridabad', 'drkuldeep2023@gmail.com'],['43', 'Dr. Archana Sharma', 'Professor', 'Delhi Technical Campus, Greater Noida', 'asharma12569@gmail.com'],
    ['44', 'Dr. Neha Jain', 'HoD-AI and Associate Professor', 'Delhi Technical Campus, Greater Noida', 'nehajain312@gmail.com'],
    ['45', 'Dr. Gagan Tiwari', 'Professor', 'Noida International University', 'Gagan.tiwari@niu.edu.in'],
    ['46', 'Dr. Deepika Sharma', 'Assistant Professor', 'Noida International University', 'Deepika.sharma@niu.edu.in'],
    ['47', 'Dr. Rashmi Dahiya', 'Assistant Professor', 'Noida International University', 'rashmi.dahiya@niu.edu.in'],
    ['48', 'Dr. Saurabh Kumar Pathak', 'Assistant Professor', 'Noida International University', 'Saurabh.kumar1@niu.edu.in'],['49', 'Dr. Ranjit Singh', 'Associate Professor', 'Chandigarh University', 'Ranjit.e10947@cumail.in'],
    ['50', 'Dr. Aleem Ali', 'Professor & Research Coordinator', 'Dept. of CSE, Chandigarh University, Gharuan-Mohali, Punjab', 'aleem.e12948@cumail.in'],
    ['51', 'Dr. Hardeep Singh', 'Professor', 'Amritsar Group of Colleges, Amritsar (Punjab), India', 'geniussodhi@gmail.com'],
    ['52', 'Manikandan J', 'Assistant Professor', 'St. Joseph\'s College of Engineering', 'jmanekandan@gmail.com'],
    ['53', 'Rohit Kumar Singh', 'Assistant Professor', 'Moradabad Institute of Technology', 'rohitmtech1988@gmail.com'],
    ['54', 'Dr. Shipra Srivastava', 'Associate Professor', 'Greater Noida Institute of Technology, Greater Noida', 'shipra.iot@gniot.net.in'],
    ['55', 'Er. Bikram Pal Singh', 'Deputy Dean (Training & Placements)', 'Global Group of Institutes, Amritsar (Punjab)', 'bikram.2k2@gmail.com'],
    ['56', 'Dr. Santosh Rane', 'President, IIC SPCE Mumbai', 'Sardar Patel College of Engineering, Mumbai', 's_rane@spce.ac.in'],
    ['57', 'Dr. Ajay Indian', 'Assistant Professor', 'Central University of Rajasthan, Ajmer-305817', 'ajay.indian@curaj.ac.in'],
    ['58', 'Dr. Gaurav Meena', 'Assistant Professor', 'Central University of Rajasthan, Ajmer-305817', 'gaurav.meena@curaj.ac.in'],
    ['59', 'Dr. Jaspreet Singh Batth', 'Professor and Head', 'Department of CSE, Chandigarh University', 'jaspreet.e10279@cumail.in'],
    ['60', 'Dr. Shailesh Saxena', 'Associate Professor & Dean Academics', 'SRMS College of Engineering and Technology, Bareilly UP', 'shailesh.saxena@srms.ac.in'],
    ['61', 'Prof. (Dr.) Brijesh Kumar Chaurasia', 'Dean, Research & Innovation', 'Pranveer Singh Institute of Technology, Kanpur', 'deanresearch@psit.ac.in, brijeshchaurasia@ieee.org'],
    ['62', 'Dr. Rahul Rastogi', 'Associate Professor & Director', 'Rakshpal Bhadur College of Engineering & Technology, Bareilly UP', 'rahulrastogi6@gmail.com'],
    ['63', 'Dr. Anil Kumar Bisht', 'Assistant Professor, CS & IT Deptt, FET', 'MJPRU, Bareilly, U.P', 'anil.bisht@mjpru.ac.in'],
    ['64', 'Dr. Sukhpreet Singh', 'Assistant Professor', 'AIT CSE, Chandigarh University', 'sukhis005@gmail.com'],
    ['65', 'Dr. Jayant R. Nandwalkar', 'Assistant Professor', 'Datta Meghe College of Engineering', '10jnand@gmail.com'],
    ['66', 'Prof. (Dr.) Tanmoy Som', 'Professor', 'Department of Mathematical Sciences, IIT(BHU), Varanasi', 'tsom.apm@iitbhu.ac.in'],
    ['67', 'Dr. Ashish Khaira', 'Assistant Professor', 'Symbiosis University of Applied Sciences, Indore', 'ashish.khaira@suas.ac.in'],
    ['68', 'Dr. Rohini Raina', 'Assistant Professor', 'G.L.A University', 'rohini.raina@gla.ac.in'],
    ['69', 'Shuchita Mudgil', 'Sr. Lecturer IT', 'Kalaniketan Polytechnic College, Jabalpur, Madhya Pradesh', 'shuchitamudgil@gmail.com'],
    ['70', 'Amit Kumar', 'Assistant Professor', 'CCSIT, Teerthankar Mahaveer University, Moradabad', 'amitakg84@gmail.com'],
    ['71', 'Dr. Partha Pakray', 'Associate Professor', 'NIT Silchar', 'partha@cse.nits.ac.in'],
    ['72', 'Dr. Ranjita Das', 'Assistant Professor', 'NIT Agartala', 'ranjita.nitm@gmail.com'],
    ['73', 'Dr. Dipanwita Debnath', 'Assistant Professor', 'Koneru Lakshmaiah Education Foundation', 'ddebnath.nita@gmail.com'],
    ['74', 'Dr. Varun Srivastava', 'Assistant Professor', 'Jaypee Institute of Information Technology, Noida', 'varun.srivastava@mail.jiit.ac.in'],
    ['75', 'Dr. Shelendra Pal', 'Assistant Professor', 'Jaypee Institute of Information Technology, Noida', 'shelendra.pal@jiit.ac.in'],
    ['76', 'Dr. Anuj Jain', 'Professor', 'Department of Computer Science and Engineering, Chandigarh University, Punjab, India', 'anuj.e17635@cumail.in'],
    ['77', 'Dr. Sumanta Kumar Mohapatra', 'Assistant Professor', 'Trident Academy of Technology, BPUT, Odisha', 'sumsusmeera@gmail.com'],
    ['78', 'Dr. Yogesh Kumar Sharma', 'Assistant Professor', 'Koneru Lakshmaiah Education Foundation (KL Deemed to be University)', 'dr.sharmayogeshkumar@gmail.com'],
    ['79', 'Dr. Madan Lal Saini', 'Professor', 'Chandigarh University', 'madan.e13485@cumail.in'],
    ['80', 'Dr. Rashmi Soni', 'Associate Professor ISE & Research Supervisor CSE', '-', 'drrashmicseofficial@gmail.com'],
    ['81', 'Dr. Nancy Arya', 'Associate Professor', 'G D Goenka University, Gurugram', 'nancy.arya@gdgu.org'],
    ['82', 'Dr. Vijay Bhardwaj', 'Professor', 'AIT CSE, Chandigarh University', 'prof.dr.bhardwaj@gmail.com'],
    ['83', 'Dr. Anil Kumar', 'Assistant Professor', 'GLA University', 'frequencyanil@gmail.com']
   
      ];

  return (
    <div className="table-container">
      <h1 className="table-title">Technical Committee</h1>
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

export default TechnicalComittee;

