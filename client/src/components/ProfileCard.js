import React, {useState} from "react";
import UpdateForm from "./UpdateForm";
import {useLocation} from "react-router-dom"

import "./Profile.css";

function ProfileCard({user, updateUsers}) {

  const location = useLocation()

  const [edit, setEdit] = useState(false)

  const handleClick = () => setEdit(!edit)


  return (
    <li>
    <div className="profile-container">
      <div className="profile-img-container">
        <img className="profile-img" src={user.image} alt="Profile" />
      </div>
      <div className="profile-name">{user.first_name} {user.last_name}</div>
      <div className="profile-class-year">{user.class_of}</div>
      <div className="profile-bio">{user.bio}</div>
      {/* <button className="profile-button">Contact Me</button> */}
    </div>
    {location.pathname.length < 10 ? edit ? <UpdateForm user={user} updateUsers={updateUsers}/> : <button onClick={handleClick}>Edit Profile</button> : null}
    </li>

  );
}

export default ProfileCard;
