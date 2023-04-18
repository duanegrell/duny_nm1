import React, {useState, useEffect} from "react"
import "./StudentEditList.css"

function StudentEditCard({id, first_name, last_name, class_of, email, image, bio, handleEdit, handleDelete}){

    // const[clicked, setClicked] = useState(false);

    // function handleClick() {
    //     if (clicked ===true) {
    //         setClicked(false);
    //     }
    //     else {
    //         setClicked(true);
    //     }
    // }

    const [selectedStudent, setSelectedStudent] = useState(null)

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        handleEdit(student);
    };

    const handleDeleteClick = (student) => {
        handleDelete(student);
    };




    return(
        <div className="student-list">
   
            <p></p>
            <div className="student" key={id}>
                <span className="student-name">{first_name} {last_name}</span>
            </div>
            <div className="student-buttons">
                <button className="student-button" onClick={() => handleEditClick(id)}>Edit</button>
                <button className="student-button" onClick={() => handleDeleteClick(id)}>Delete</button>
            </div>

    
        </div>

    )
}

export default StudentEditCard
