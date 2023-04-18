import React from 'react';
import {NavLink, useHistory} from "react-router-dom"
import './Home.css'

function Home({updateUser, user}) {
    
    const history = useHistory()

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
    <div>
      {/* <div className="top-line">
        <p>DOMINICAN UNIVERSITY</p>
      </div> */}
      <div className="container">
        <div className="picture">
        {/* <img src="https://qbi.uq.edu.au/files/24480/Neuroscience_image_QBI_iriswang-bloomingaxon.jpg" alt="Smoke" className="logo"></img> */}
        </div>
        <div className="content">
            <h1>PT611: Neuromuscular Evaluation and Treatment</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;