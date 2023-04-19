import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import "./StudentEditList.css"

function StudentEditCard({users, setUsers}){
   
    function handleDelete(id) {
        fetch(`/users/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUsers((users) =>
              users.filter((user) => user.id !== id)
            );
          }
        });
    }

    const filteredStudents = users.filter ( (user) => {
        return user.class_of != "professor"
    })

    return(
        <div className="student-list">
            <p></p>
            {filteredStudents.map((student) => (
                <div key={student.id} className="card">
                    <p></p>
                    <div className="student" key={student.id}>
                        <span className="student-name">{student.first_name} {student.last_name}</span>
                    </div>

                <button onClick={() => handleDelete(student.id)}>Delete</button>
                </div>
            ))}    
        </div>
    )
}

export default StudentEditCard
