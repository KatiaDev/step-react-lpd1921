import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LikeSection = (props) => {
  const { likePost, likes, postId } = props;
  const [isLiked, setIsLiked] = useState(false);

  const clickHandler = (event) => {
    if (isLiked === false) {
      likePost(postId);
      setIsLiked(true);
    } else return;
  };

  //<></> Fragment
  return (
    <>
      <div>
        <div className="like-section" key="likes-icons-container">
          <div className="like-section-wrapper" onClick={clickHandler}>
            {!isLiked ? (
              <FontAwesomeIcon icon={faHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
            )}
          </div>
          <div className="like-section-wrapper">
            <FontAwesomeIcon icon={faComment} />
          </div>
        </div>
        <p className="like-number">{likes} likes</p>
      </div>
    </>
  );
};

export default LikeSection;
