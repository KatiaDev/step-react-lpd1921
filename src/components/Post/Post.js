import React from "react";
import "./Post.css";
import Comment from "../Comment/Comment";
import LikeSection from "../LikeSection/LikeSection";

function Post(props) {
  return (
    <div className="posts-container-wrapper">
      <div className="post-border">
        {/**Post header section */}
        <div className="post-header">
          <div className="post-thumb-wrapper">
            <img
              src={props.post.thumbnailUrl}
              className="post-thumb"
              alt="avatar"
            />
          </div>

          <h2>{props.post.username}</h2>
        </div>
        {/**Post image */}
        <div className="post-image-wrapper">
          <img src={props.post.imageUrl} alt="post" className="post-image" />
        </div>

        <LikeSection
          likes={props.post.likes}
          likePost={props.likePost}
          postId={props.post.id}
        />

        {/**Comments section */}
        <div>
          {props.post.comments &&
            props.post.comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Post;
