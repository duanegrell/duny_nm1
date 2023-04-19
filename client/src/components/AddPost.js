import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"

function AddPost({user, updatePosts}) {

    const formSchema = yup.object().shape({
        topic: yup.string().required(""),
        title: yup.string().required(""),
        body: yup.string().required(""),
    })
    const formik = useFormik({
        initialValues:{
            topic:"",
            title:"",
            body:"",
            user_id: user.id,
        },
        
        validationSchema: formSchema,
        onSubmit: (values, actions) => {
            fetch('/posts', { 
                method: "POST",
                headers: {
                    "Content-Type":"application/json"                    
                },
                body: JSON.stringify(values)
            })
            .then(r => r.json())
            .then(post => {
                updatePosts(post)
                alert("Post Added")

            })
        actions.resetForm();
        }
    })



    return (
        <> 
        {Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}
        <Form onSubmit={formik.handleSubmit}>
          <label>
            Topic
          </label>
          <input type='text' name='topic' value={formik.values.topic} onChange={formik.handleChange} />
          
          <label>
            Title
          </label>
          <input type='text' name='title' value={formik.values.title} onChange={formik.handleChange} />        

          <>
          <label>
            Post
          </label>
          <input type='text' name='body' value={formik.values.body} onChange={formik.handleChange} />
          
          </>
          <input type='submit' value={'Submit Post'} onSubmit={Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}/>
        </Form>
      </>

    )
}

export default AddPost

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