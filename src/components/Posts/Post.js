import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getPrettyDate from "../../utils/utils";

const Post = ({ id, content, created }) => {
  const postId = id;
  const date = getPrettyDate(created);

  return (
    <Link to={`/posts/${postId}`} className="link">
      <div className="box-width">
        <div className="post__wrap">
          <div className="post__user-info">
            <div className="user__img"></div>
            <div className="user__wrap">
              <h5 className="user__name">Tolya</h5>
              <p className="user__time">{date}</p>
            </div>
          </div>
          <div className="post__content">{content}</div>
          <div className="line"></div>
          <div className="post__reaction">
            <button className="btn__form-nav btn">Like</button>
            <button className="btn__form-nav btn">Comment</button>
          </div>
          <div className="line"></div>
          <div className="post__form">
            <div className="user__img"></div>
            <input
              className="post__input form-new__input"
              type="text"
              value="Напишите комментарий"
              onChange={(e) => console.log(e)}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

Post.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  created: PropTypes.any,
};

export default Post;
