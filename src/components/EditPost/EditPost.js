import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const EditPost = ({ onEditPost, data }) => {
  const [post, setPost] = useState(data.content);
  const [isSave, setSave] = useState(false);

  const handleSave = () => {
    onEditPost({
      id: data.id,
      content: post,
    });

    setSave(true);
  };
  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handleClick = () => {
    return <Navigate to={`/posts/${data.id}`} replace={true} />;
  };

  if (isSave) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="box-width">
      <div className="edit-post__wrap">
        <div className="form-new__nav">
          <div className="edit-post__title">Редактировать публикацию</div>
          <button onClick={handleClick} className="btn__icon">
            x
          </button>
        </div>
        <div className="line"></div>
        <div className="post__form">
          <div className="user__img"></div>
          <input
            className="form-new__input"
            type="text"
            value={post}
            onChange={handleChange}
          />
        </div>
        <div className="line"></div>
        <div className="header__wrap edit-post__action">
          <button onClick={handleSave} className="btn">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

EditPost.propTypes = {
  onEditPost: PropTypes.func,
  data: PropTypes.object,
};

export default EditPost;
