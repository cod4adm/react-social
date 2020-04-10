import React from 'react';

const Post = (props) => {
    return (
    <div className="post">
        <img className="avatar" src="https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png" alt=""/>
        {props.message}
        <div>
            {props.likesCount} likes!!!
        </div>
    </div>
    );
}

export default Post;