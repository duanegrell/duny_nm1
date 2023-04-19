import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"

export default function StudentAdd({updateUsers}) {
    const [signUp, setSignUp] = useState(true)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        first_name: yup.string().required("FIRST NAME REQUIRED"),
        last_name: yup.string().required("LAST NAME REQUIRED"),
        email: yup.string().email(),
        password: yup.string().required("PASSWORD REQUIRED")
    })

    
    const formik = useFormik({
        initialValues:{
            first_name:"",
            last_name:"",
            email:"",
            password:""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
          if (signUp){
            fetch('/users', { 
                method: "POST",
                headers: {
                    "Content-Type":"application/json"                    
                },
                body: JSON.stringify(values)
            })
            .then(r => r.json())
            .then(user => {
                updateUsers(user)
                alert("Student Added")
                // updateUser(user)
                // history.push('/students')
            })
          }
          // else {
          //   fetch('/login', {
          //       method: "POST",
          //       headers: {
          //           "Content-Type":"application/json"                    
          //       },
          //       body: JSON.stringify(values)
          //   })
          //   .then(r => r.json())
          //   .then(user => {
          //       updateUser(user)
          //       history.push('/profile')
          //   })
          // }

        }
    })
 
  return (
    <> 
      {Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}
      {/* <h2>Please Log in!</h2> */}
      {/* <h2>{signUp?'Log in':'Register Student?'}</h2> */}
      {/* <button onClick={handleClick}>{signUp?'Log In!':'Register Student!'}</button> */}
      <Form onSubmit={formik.handleSubmit}>
        <label>
          First Name
        </label>
        <input type='text' name='first_name' value={formik.values.first_name} onChange={formik.handleChange} />
        <label>
          Last Name
        </label>
        <input type='text' name='last_name' value={formik.values.last_name} onChange={formik.handleChange} />        
        {signUp && (
          <>
          <label>
            Email
          </label>
          <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />
          </>
        )}
        <>
        <label>
          Password
        </label>
        <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange} />
        </>
        <input type='submit' value={signUp?'Register Student':'Log In!'} onSubmit={Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}/>
      </Form>
    </>
  )
}

export const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;
input[type=submit]{
  background-color:#42ddf5;
  color: white;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`