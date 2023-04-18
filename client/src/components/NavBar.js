import React, { useContext } from 'react';
import {NavLink, useHistory} from "react-router-dom"
import { Context } from './App';

import './Navbar.css';

function NavBar({updateUser}) {
  
  const history = useHistory()

  const [user, setUser] = useContext(Context)

  const handleLogout = () => {
    fetch('/logout',{
      method: 'DELETE'
    })
    .then(r => {
      if(r.ok){
        updateUser(null)
        history.push('/login')
      }
    })
  }
  
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <a className="active">PT611</a>
        {/* {user ? <a href="#">{user.first_name}</a> : null} */}
        <a href="#"><NavLink to="/home">Home</NavLink></a> 
        {user ? <a href="#"><NavLink to="/syllabus">Syllabus</NavLink></a> : null}
        {user ? <a href="#"><NavLink to="/slideshows">Slideshows</NavLink></a> : null}
        {user ? <a href="#"><NavLink to="/posts">Posts</NavLink> </a> : null}
        {user ? <a href="#"><NavLink to="/students">Students</NavLink></a> : null}
        {user ? <a href="#"><NavLink to="/faculty">Faculty</NavLink></a> : null}
        {user ? <a href="#"><NavLink to="/profile">Profile</NavLink></a> : null}
        {user && user.class_of == "professor" ? <a href="#"><NavLink to="/questions">Questions</NavLink></a> : null}
        {user && user.class_of == "professor" ? <a href="#"><NavLink to="/editstudents">Edit Students</NavLink></a> : null}
        <a onClick={user ? handleLogout : null} href="#"><NavLink to="/login">{user ? `Logout ${user.first_name}` : 'Login'}</NavLink></a>
      </div >
      {/* <div className="navbar__logo">Logo</div> */}
    </nav>
    
  );
}

export default NavBar;