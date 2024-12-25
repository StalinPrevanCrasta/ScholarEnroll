import { useEffect, useState } from 'react';

function ViewAll() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/students')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <div>
            <h2>All Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.USN}>
                    {student.USN} - {student.name} - Courses: {student.courses.join(', ')} - Elective: {student.elective}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewAll;