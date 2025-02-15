import React, {useState} from "react";
import Student from "./Student";
import Profile from "./Profile";
import Faculty from "./Faculty";

import "./Student.css"

function FacultyList( {professors}) {
    


    const filteredStudents = professors.filter ( (faculty) => {
        return faculty.class_of == "professor"
    })
    const mappedFaculty = filteredStudents.map((faculty) => (
        <Faculty
          key={faculty.id}
          first_name={faculty.first_name}
          last_name={faculty.last_name}
          email={faculty.email}
          class_of={faculty.class_of}

          image={faculty.image}
          bio={faculty.bio}
        />
    ))
    
    return (
    <>
        <p></p>
        <p></p>
        {mappedFaculty}
    </>
    );
};

export default FacultyList;
