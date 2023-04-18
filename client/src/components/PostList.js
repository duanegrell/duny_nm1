import React, {useState} from "react";
import Post from "./Post";
import SearchTopic from "./SearchTopic";

function PostList( {posts}) {
    
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
    
    return (
    <>
        <p></p>
        <SearchTopic setSearch={setSearch} />
        <p></p>
        {mappedPosts}
    </>
    );
};

export default PostList;