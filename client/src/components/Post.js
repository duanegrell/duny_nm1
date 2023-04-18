import React, {useState} from "react";
import "./Post.css"

function Post({topic, body, title}) {
    
    const[clicked, setClicked] = useState(false);

    function handleClick() {
        if (clicked ===true) {
            setClicked(false);
        }
        else {
            setClicked(true);
        }
    }

    return (
    <div className = 'review-container' onClick ={handleClick}>
        <div className="review-card">
            <p className="review-topic">{topic}</p>
            <p className="review-title">{title}</p>       
            <p className ="review-content">{body}</p>
            <p> </p>
        </div>
    </div>
    );
};

export default Post;