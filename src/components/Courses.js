import React from 'react'

function Courses() {
    const courses = [
      { code: 'CS101', name: 'Introduction to Programming', ltps: '3-1-0', credits: 4 },
      { code: 'ECE201', name: 'Analog Electronics', ltps: '3-0-2', credits: 4 },
      { code: 'ME301', name: 'Thermodynamics', ltps: '3-1-0', credits: 4 }
    ];
  
    return (
      <div>
        <h2>Courses</h2>
        <div className="card-container">
          {courses.map(course => (
            <div key={course.code} className="card">
              <h3>{course.name}</h3>
              <p>Code: {course.code}</p>
              <p>L-T-P-S: {course.ltps}</p>
              <p>Credits: {course.credits}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Courses
