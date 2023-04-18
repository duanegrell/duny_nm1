import React from "react";
import "./Profile.css";

function ProfileCard({user}) {
  return (
    <div className="profile-container">
      <div className="profile-img-container">
        <img className="profile-img" src={user.image} alt="Profile" />
      </div>
      <div className="profile-name">{user.first_name} {user.last_name}</div>
      <div className="profile-class-year">{user.class_of}</div>
      <div className="profile-bio">{user.bio}</div>
      {/* <button className="profile-button">Contact Me</button> */}
    </div>
  );
}

export default ProfileCard;
