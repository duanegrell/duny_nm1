import React, {useState} from "react";
import Post from "./Post";
import SearchTopic from "./SearchTopic";
import {useLocation} from "react-router-dom"
import AddPost from "./AddPost";

function PostList( {posts, updatePosts, user}) {
    
    const [search, setSearch] = useState('')

    const filteredPosts = posts.filter ( (post) => {
        // return post.topic.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase())
        return post.topic.toLowerCase().includes(search.toLowerCase())
    })

    const mappedPosts = filteredPosts.map((post) => (
        <Post
            key={post.id}
            topic={post.topic}
            title={post.title}
            body={post.body}
        />
    ))

    const location = useLocation()

    const [edit, setEdit] = useState(false)
  
    const handleClick = () => setEdit(!edit)
    
    return (
    <>
        <p></p>
        {location.pathname.length < 10 ? edit ? <AddPost user={user} updatePosts={updatePosts}/> : <button onClick={handleClick}>Add Post</button> : null}
        <p></p>
        <SearchTopic setSearch={setSearch} />
        <p></p>
        {mappedPosts}
    </>
    );
};

export default PostList;