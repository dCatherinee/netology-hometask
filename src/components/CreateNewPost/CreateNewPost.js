import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";

const CreateNewPost = ({ onAdd }) => {
  const [post, setPost] = useState("Hello!");
  const [isSave, setSave] = useState(false);

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      id: 0,
      content: post,
    });

    setPost("Hello!");
    setSave(true);
  };

  if (isSave) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="box-width">
      <div className="form-new__wrap">
        <div className="form-new__nav">
          <div className="nav__wrap-btn">
            <button className="btn__form-nav btn active">Публикация</button>
            <button className="btn__form-nav btn">Фото/видео</button>
            <button className="btn__form-nav btn">Прямой эфир</button>
            <button className="btn__form-nav btn">Еще</button>
          </div>
          <Link to="/" className="link">
            <button className="btn__icon">x</button>
          </Link>
        </div>
        <div className="line"></div>
        <form onSubmit={handleSubmit}>
          <div className="form-new__post">
            <div className="user__img"></div>
            <input
              className="form-new__input"
              type="text"
              name="post"
              value={post}
              onChange={handleChange}
            />
          </div>
          <div className="line"></div>
          <div className="form-new__btn-wrap">
            <input type="submit" className="btn" placeholder="Создать" />
          </div>
        </form>
      </div>
    </div>
  );
};

CreateNewPost.propTypes = {
  onAdd: PropTypes.func,
};

export default CreateNewPost;
