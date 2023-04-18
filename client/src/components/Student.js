import React, {useState} from "react"
import "./Student.css"

function Student({first_name, last_name, class_of, email}){

  const[clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked ===true) {
        setClicked(false);
    }
    else {
        setClicked(true);
    }
  }

  return(
      <div className="student-entry" onClick ={handleClick}>
        <img
          className="student-image"
          // src={student.image}
          alt={last_name}
        />
        <div className="student-name">{first_name} {last_name}</div>
        <div className="student-email">{clicked ?  class_of : null}</div>
        <div className="student-email">{clicked ? email : null}</div>
        
      </div>

  )
}

export default Student


// function StudentEntry({ student }) {
//   return (
//     <div className="student-entry">
//       <img
//         className="student-image"
//         src={student.image}
//         alt={student.name}
//       />
//       <div className="student-name">{student.name}</div>
//       <div className="student-email">{student.email}</div>
//       <button className="profile-button">Contact Me</button>
//     </div>
//   );
// }