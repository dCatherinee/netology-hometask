import React, { useState } from "react";
import PropTypes from "prop-types";
import EditPost from "../EditPost/EditPost";
import { Navigate, useParams } from "react-router-dom";
import getPrettyDate from "../../utils/utils";

const InfoPost = ({ getPost, onDelete, onEditPost }) => {
  const [isEdit, setEdit] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const params = useParams();
  const postId = params.id;
  const post = getPost(postId);
  const date = getPrettyDate(post.created);

  if (isEdit) {
    return <EditPost onEditPost={onEditPost} data={post} />;
  }

  if (isDelete) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="box-width">
      <div className="post__wrap">
        <div className="post__user-info">
          <div className="user__img"></div>
          <div className="user__wrap">
            <h5 className="user__name">Tolya</h5>
            <p className="user__time">{date}</p>
          </div>
        </div>
        <div className="post__content">{post.content}</div>
        <div className="line"></div>
        <div className="post__reaction">
          <button className="btn__form-nav btn">Like</button>
          <button className="btn__form-nav btn">Comment</button>
        </div>
        <div className="line"></div>
        <div className="header__wrap edit-post__action">
          <button onClick={() => setEdit(true)} className="btn">
            Изменить
          </button>
          <button
            onClick={() => {
              onDelete(post.id);
              setDelete(true);
            }}
            className="btn_red btn"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

InfoPost.propTypes = {
  getPost: PropTypes.func,
  onDelete: PropTypes.func,
  onEditPost: PropTypes.func,
};

export default InfoPost;
