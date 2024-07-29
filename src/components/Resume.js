import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        <div className="text-center">
          <p className="text-lg mb-4">Download my resume to see my full work experience and skills.</p>
          <a
            href="https://drive.google.com/file/d/1CzMdtfwqJ9tr2UbJbnl6dhm-s3MfCBii/view?usp=drive_link" // Replace with the path to your resume
            className="bg-blue-500 text-white py-2 px-4 rounded"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
