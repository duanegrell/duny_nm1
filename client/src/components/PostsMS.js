import React, {useState} from "react";
import Post from "./Post";

function PostsMS( {posts}) {
    
    // const search = "MS"

    const filteredPosts = posts.filter ( (post) => {
        return post.topic.includes("MS")
    })

    const mappedPosts = filteredPosts.map((post) => (
        <Post
            key={post.id}
            topic={post.topic}
            title={post.title}
            body={post.body}
        />
    ))
    
    return (
    <>
        <p></p>
        {mappedPosts}
    </>
    );
};

export default PostsMS;