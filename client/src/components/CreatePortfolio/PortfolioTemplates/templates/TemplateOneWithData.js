import React from 'react';
// import Header from '../templatecomponents/Header';
// import About from '../templatecomponents/About';
// import Education from '../templatecomponents/Education';
// import Experience from '../templatecomponents/Experience';
const resumeData = [
  {
      "profile": {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+1234567890",
        "location": "1234 Elm Street, Springfield, IL",
        "url": "http://johndoeportfolio.com",
        "summary": "A highly motivated software engineer with 5+ years of experience in web development and project management."
      },
      "educations": [
        {
          "school": "State University",
          "degree": "Bachelor of Science in Computer Science",
          "gpa": "3.8",
          "date": "May 2018",
          "descriptions": [
            "Completed coursework in algorithms, data structures, and web development.",
            "Led a team project to develop a mobile app for campus navigation."
          ]
        },
        {
          "school": "Community College",
          "degree": "Associate of Science in Information Technology",
          "gpa": "3.9",
          "date": "May 2016",
          "descriptions": [
            "Graduated with honors.",
            "Member of the tech club, organizing coding workshops and hackathons."
          ]
        }
      ],
      "workExperiences": [
        {
          "company": "Tech Solutions Inc.",
          "jobTitle": "Senior Software Engineer",
          "date": "June 2018 - Present",
          "descriptions": [
            "Designed and implemented web applications using JavaScript frameworks.",
            "Collaborated with cross-functional teams to define project requirements and deliverables.",
            "Mentored junior developers and conducted code reviews."
          ]
        },
        {
          "company": "WebWorks",
          "jobTitle": "Software Engineer Intern",
          "date": "June 2017 - August 2017",
          "descriptions": [
            "Assisted in developing and testing web applications.",
            "Participated in daily stand-up meetings and sprint planning sessions."
          ]
        }
      ],
      "projects": [
        {
          "project": "E-commerce Platform",
          "date": "Jan 2020 - Dec 2020",
          "descriptions": [
            "Developed a scalable e-commerce platform using React and Node.js.",
            "Implemented payment gateway integration and user authentication."
          ]
        },
        {
          "project": "Personal Blog",
          "date": "Mar 2019 - Present",
          "descriptions": [
            "Created a personal blog to share technical articles and tutorials.",
            "Optimized the blog for SEO and improved performance using lazy loading techniques."
          ]
        }
      ],
      "skills": {
        "featuredSkills": "JavaScript, React, Node.js, SQL, Git",
        "descriptions": [
          "Proficient in front-end development using React and Redux.",
          "Experienced in back-end development with Node.js and Express.",
          "Skilled in database management with SQL and NoSQL databases.",
          "Strong understanding of version control systems like Git."
        ]
      }
    }      
];



const userData = [
  {
    "fname": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "password": "securePassword123",
    "tokens": [
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaWNlIEpvaG5zb24iLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      },
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NTY3ODkwMTIzNCIsIm5hbWUiOiJBbGljZSBKb2huc29uIiwiaWF0IjoxNjIzMzIwMzIyfQ.w5dKjIRJz7MiI6-Zk6c1EP7TyL_P1Kh6IKF0zRgyJ9M"
      }
    ]
  }
];

// const TemplateOneWithData = () => {
//   const resume = resumeData[0];
//   return (
//     <div>
//       <Header userData={userData[0]} />
//       <About userData={userData[0]} Resume={resumeData[0]} />
//       <Experience workExperiences={resume.workExperiences} />
//       <Education educations={resume.educations} />
//     </div>
//   );
// };

export default TemplateOneWithData;