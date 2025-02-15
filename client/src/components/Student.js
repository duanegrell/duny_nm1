import React, {useState} from "react"
import "./Student.css"

function Student({first_name, last_name, class_of, email, image, bio}){

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
          src={image}
          alt={last_name}
        />
        <div className="student-name">{first_name} {last_name}</div>
        {/* <div className="student-email">{clicked ?  class_of : null}</div> */}
        <div className="student-email">{clicked ? email : null}</div>
        
      </div>

  )
}

export default Student
