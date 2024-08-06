import React from 'react'

function Timetable() {
    const timetable = [
      { day: 'Monday', hours: '9:00 - 10:00', course: 'Data Structures', roomno: '101' },
      { day: 'Tuesday', hours: '10:00 - 11:00', course: 'Analog Circuits', roomno: '102' },
      { day: 'Wednesday', hours: '11:00 - 12:00', course: 'c', roomno: '103' },
      { day: 'Thursday', hours: '11:00 - 12:00', course: 'Java', roomno: '103' },
      { day: 'Friday', hours: '11:00 - 12:00', course: 'Python', roomno: '103' },
      { day: 'Saturday', hours: '11:00 - 12:00', course: 'MSWD', roomno: '103' },
    ];
  
    return (
      <div>
        <h2>Time Table</h2>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
              <th>Course</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.hours}</td>
                <td>{entry.course}</td>
                <td>{entry.roomno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Timetable
