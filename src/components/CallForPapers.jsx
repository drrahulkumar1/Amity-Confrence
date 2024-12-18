import React from 'react';


const CallForPapers = () => {
  return (
    <div className="main-content">
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px' }}>
      <header style={{ textAlign: 'center', padding: '30px 30px 30px 30px', backgroundColor: '#f8f9fa', marginBottom: '20px', marginTop: '80px'}}>
        <h1>AIHEITTLR 2024</h1>
        <h2>International Conference on Artificial Intelligence in Higher Education Institutions</h2>
        <p>Transforming Teaching, Learning, and Research</p>
        <p>Date: 24th September 2024 | Online Mode</p>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <h3>Call for Papers</h3>
        <p>
          The AIHEITTLR 2024 conference focuses on the transformative impact of Artificial Intelligence (AI) in higher
          education institutions. We invite educators, researchers, industry experts, and policymakers to contribute
          original unpublished research and developments in the field. Join us to discuss innovative AI applications,
          share best practices, and address the challenges of AI integration.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3>Conference Themes</h3>
        <ul>
          <li>AI-Driven Innovations in Computer Science</li>
          <li>AI Developments in Applied Sciences</li>
          <li>AI in Electrical and Electronics Engineering</li>
          <li>AI Progressions in Mechanical and Civil Engineering</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3>Important Dates</h3>
        <ul>
          <li>Abstract Submission Deadline: 13th September 2024</li>
          <li>Acceptance Notification: 17th September 2024</li>
          <li>Full Paper Submission Deadline: 20th September 2024</li>
          <li>Conference Date: 24th September 2024</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3>Submission Guidelines</h3>
        <p>
          Authors are invited to submit their abstracts via email at
          <a href="mailto:aiheitlr24aump@gwa.amity.edu"> aiheitlr24aump@gwa.amity.edu</a>. All manuscripts will
          undergo a double-blind peer review process. Accepted abstracts will be published in the conference souvenir,
          and selected full-length papers will be published in refereed journals.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3>Registration Fee</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Category</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indian</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Foreign</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Author</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rs. 800</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>$10</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Participant</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rs. 400</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>$5</td>
            </tr>
          </tbody>
        </table>
        <p>
          Payment can be made through the link: 
          <a href="https://amity.edu/gwalior/paymentgateway/ICAI2024" target="_blank" rel="noopener noreferrer">
            AIHEITTLR 2024 Payment Gateway
          </a>
        </p>
      </section>

      <footer style={{ textAlign: 'center', padding: '10px 0', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
        <p>For more details, contact: 7303-872-872</p>
        <p>© 2025 Amity University, Madhya Pradesh</p>
      </footer>
    </div>
    </div>
  );
};

export default CallForPapers;




