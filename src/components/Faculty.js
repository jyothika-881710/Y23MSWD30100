import React from 'react'

function Faculty() {
    const faculty = [
        { id: 1, name: 'Dr. Smith', designation: 'Professor', department: 'CSE' },
        { id: 2, name: 'Dr. Williams', designation: 'Associate Professor', department: 'ECE' },
        { id: 3, name: 'Dr. Brown', designation: 'Assistant Professor', department: 'ME' },
        { id: 4, name: 'Dr. white', designation: 'Assistant Professor', department: 'CSE' },
        { id: 5, name: 'Dr. green', designation: 'Assistant Professor', department: 'BT' },

    ];

    return (
        <div>
            <h2>Faculty Details</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {faculty.map(facultyMember => (
                        <tr key={facultyMember.id}>
                            <td>{facultyMember.id}</td>
                            <td>{facultyMember.name}</td>
                            <td>{facultyMember.designation}</td>
                            <td>{facultyMember.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Faculty
