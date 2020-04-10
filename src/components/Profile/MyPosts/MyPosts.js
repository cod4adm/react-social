import React from 'react';
import Post from './Post'

const MyPosts = (props) => {
    let postElement =
        props.posts.map ( post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

   return (
    <div className="myPosts">
        <h3>MyPosts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {postElement}
        </div>
    </div>
    );
};

export default MyPosts;