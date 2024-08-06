import React from 'react'

function Students() {
    const studentList = [
      { id: 1, name: 'Alice', branch: 'CSE', year: '3rd' },
      { id: 2, name: 'Bob', branch: 'ECE', year: '2nd' },
      { id: 3, name: 'Charlie', branch: 'ME', year: '4th' }
    ];
  
    return (
      <div>
        <h2>Students</h2>
        <ul>
          {studentList.map(student => (
            <div key={student.id}>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Branch: {student.branch}</p>
            <p>Year: {student.year}</p>
            <hr />
          </div>
          ))}
        </ul>
      </div>
    );
  }
export default Students
