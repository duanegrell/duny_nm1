import React, {useState} from "react"
import "./Student.css"

function Faculty({first_name, last_name, class_of, email, image, bio}){

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

        <div className="student-name">{first_name} {last_name}</div>
        <div className="student-name">{bio}</div>
        {/* <div className="student-email">{clicked ?  bio : null}</div> */}
        <div className="student-email">{clicked ? email : null}</div>
        <button className="profile-button">Contact Me</button>

        <img
          className="student-image"
          src={image}
          alt={last_name}
        />
        
      </div>

  )
}

export default Faculty