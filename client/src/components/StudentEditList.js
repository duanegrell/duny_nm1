import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"

export default function StudentEdit({updateUser, updateUsers}) {
    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        first_name: yup.string().required("FIRST NAME REQUIRED"),
        last_name: yup.string().required("LAST NAME REQUIRED"),
        image: yup.string().image(),
        bio: yup.string().bio(),
        class_of: yup.string().class_of(),
        email: yup.string().email(),
        password: yup.string().required("PASSWORD REQUIRED")
    })

    
    const formik = useFormik({
        initialValues:{
            first_name:"",
            last_name:"",
            image:"",
            bio:"",
            class_of:"",
            email:"",
            password:""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {

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
                updateUser(user)
                history.push('/profile')
            })

        }
    })
 
  return (
    <> 
      {Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}
      {/* <h2>Please Log in!</h2> */}
      <h2>{'Register Student'}</h2>
      <button onClick={handleClick}>{signUp?'Log In!':'Register Student!'}</button>
      <Form onSubmit={formik.handleSubmit}>

        <label>
            First Name
        </label>
        <input type='text' name='first_name' value={formik.values.first_name} onChange={formik.handleChange} />

        <label>
            Last Name
        </label>
        <input type='text' name='last_name' value={formik.values.last_name} onChange={formik.handleChange} />    

        <label>
            Image
        </label>
        <input type='text' name='image' value={formik.values.image} onChange={formik.handleChange} />

        <label>
            Bio
        </label>
        <input type='text' name='bio' value={formik.values.bio} onChange={formik.handleChange} />

        <label>
            Class of:
        </label>
        <input type='text' name='class_of' value={formik.values.class_of} onChange={formik.handleChange} />

        <label>
            Email
        </label>
        <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />
        
        <label>
            Password
        </label>
        <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange} />

        <input type='submit' value={'Register Student'} onSubmit={Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}/>
      </Form>
    </>
  )
}