import React, { useState } from 'react';
import StudentEditCard from './StudentEditCard';
import "./StudentEditList.css"



function StudentEditList ({ students, handleEdit, handleDelete }) {
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        handleEdit(student);
    };

    const handleDeleteClick = (student) => {
        handleDelete(student);
    };

    const filteredStudents = students.filter ( (student) => {
        return student.class_of != "professor"  
    })
    const mappedStudents = filteredStudents.map((student) => (
        <StudentEditCard
        key={student.id}
        id={student.id}
        first_name={student.first_name}
        last_name={student.last_name}
        email={student.email}
        class_of={student.class_of}

        image={student.image}
        bio={student.bio}
        />
    ))

  return (
    <div>
      {mappedStudents}
    </div>
  );
};

export default StudentEditList;
