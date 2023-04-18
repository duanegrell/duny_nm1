import React, {useEffect, useState, createContext, useContext} from "react"
import {Route, Switch, useHistory} from "react-router-dom"

import Header from "./Header"
import Authentication from "./Authentication"
import StudentList from "./StudentList"
import Profile from "./Profile"

import QuestionList from "./QuestionList"
import PostList from "./PostList"

import Home from "./Home"
import NavBar from "./NavBar"

import SlideshowMS from "./SlideshowMS"
import SlideshowPD from "./SlideshowPD"
import SlideshowCVA from "./SlideshowCVA"
import SlideshowSCI from "./SlideshowSCI"
import SlideshowTBI from "./SlideshowTBI"
import FacultyList from "./FacultyList"

import PostsMS from "./PostsMS"

export const Context = React.createContext();

export default function App(){
  const [diagnoses, setDiagnoses] = useState([])
  const [users, setUsers] = useState([])
  const [questions, setQuestions] = useState([])
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  

  useEffect(() => {
    fetchUser()
  },[])

  useEffect(() => {
    updateUsers()
  }, [])

  useEffect(() => {
    fetch("http://localhost:5555/diagnoses")
      .then(r => r.json())
      .then(data => {
        setDiagnoses(data)})
  }, [])

  
  useEffect(() => {
    fetch("http://localhost:5555/posts")
      .then(r => r.json())
      .then(data => {
        setPosts(data)})
  }, [])

  
  useEffect(() => {
    fetch("http://localhost:5555/questions")
      .then(r => r.json())
      .then(data => {
        setQuestions(data)})
  }, [])

  const updateUsers = () => {
    fetch("http://localhost:5555/users", )
    .then(r => r.json())
    .then(data => {
      setUsers(data)})
  }

  const fetchUser = () => {
    fetch('/authorized')
    .then (r => {
      if (r.ok){
        r.json().then(user => setUser (user))
      }else{
        setUser(null)
      }
    })
  }

  const updateUser = user => setUser(user)






  return(

    
    <main className="app">
      <Header updateUser={updateUser} user={user}/>

      <Context.Provider value ={[user, setUser]}>
        <NavBar updateUser={updateUser}/>
        {/* <h1>{user ? "Signed in" : "Signed out"}</h1> */}
      </Context.Provider>
      
      <Switch>

        {/* <Route exact path="/">
          {useHistory().push('/home')}
        </Route>
         */}
        <Route exact path="/home">
          <Home updateUser={updateUser} user={user}/>
        </Route>

        <Route exact path="/slideshows">
          <SlideshowMS />
          <SlideshowCVA />
          <SlideshowTBI />
          <SlideshowSCI />
          <SlideshowPD />
        </Route>



        <Route exact path="/login">
          <Authentication updateUser={updateUser} updateUsers={updateUsers}/>
        </Route>

        {user && user.class_of == "professor" ? <Route exact path="/questions">
          <QuestionList questions={questions}/>
        </Route> : null}

        {user ? <Route exact path="/posts">
          <PostList posts={posts}/>
        </Route> : null}

        {user ? <Route exact path="/students">
          <StudentList students = {users} updateUsers={updateUsers}/>
        </Route> : null}

        {user ? <Route exact path="/faculty">
          <FacultyList professors = {users} updateUsers={updateUsers} user={user}/>
        </Route> : null}

        {user ? <Route exact path="/profile">
          <Profile user={user} updateUsers={updateUsers}/>
        </Route> : null}

        <Route path="*">
            <h1>404 not found</h1>
        </Route> 

      </Switch>
    </main>
  )
}