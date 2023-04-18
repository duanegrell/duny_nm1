import React, {useState} from "react";
import Student from "./Student";
import Search from "./Search";

import "./Student.css"


function StudentList( {students}) {
    
    const [search, setSearch] = useState('')

    const filteredStudents = students.filter ( (student) => {
        return (student.first_name.toLowerCase().includes(search.toLowerCase()) || student.last_name.toLowerCase().includes(search.toLowerCase())) && student.class_of != "professor"
    })
    const mappedStudents = filteredStudents.map((student) => (
        <Student
          key={student.id}
          first_name={student.first_name}
          last_name={student.last_name}
          email={student.email}
          class_of={student.class_of}

          image={student.image}
          bio={student.bio}
        />
    ))
    
    return (
    <>
        <p></p>
        <Search setSearch={setSearch} />
        <p></p>
        <div className="student-directory">
            {mappedStudents}
        </div>
    </>
    );
};

export default StudentList;
