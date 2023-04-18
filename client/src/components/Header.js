import React from "react"
// import {NavLink, useHistory} from "react-router-dom"
import "./Header.css"

export default function Header({updateUser, user}) {
  // const history = useHistory()

  // const handleLogout = () => {
  //   fetch('/logout',{
  //     method: 'DELETE'
  //   })
  //   .then(r => {
  //     if(r.ok){
  //       updateUser(null)
  //       history.push('/login')
  //     }
  //   })
  // }

  return(
    <header className="header">
      <ul>
        <h2 className="logo_text"> - </h2>
        <h2 className="logo_text">Neuromuscular Evaluation and Treatment</h2>

      </ul>       
    </header>
  )
}