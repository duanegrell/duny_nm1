import React from "react"
import "./UpdateForm.css"

function UpdateForm({user, updateUsers}) {
  const handleSubmit = e => {
    let form = e.target
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
        bio: form.bio.value,
        img: form.image.value,
        first_name: form.first_name.value,
        last_name: form.last_name.value
      })
    })
  }

  return (user ? <>
    <div className='userForm'>
      <form onSubmit={handleSubmit} className="form">
        <label for='first_name'>First Name:</label>
        <input type="text" name='first_name'/>

        <label for='last_name'>Last Name:</label>
        <input type="text" name='last_name'/>

        <label for='image'>Image:</label>
        <input type="text" name='image'/>

        <label for='bio'>Bio:</label>
        <input type="text" name='bio'/>

        <button type="submit">Submit</button> 
      </form>
    </div> 
  </> : null)
}

export default UpdateForm