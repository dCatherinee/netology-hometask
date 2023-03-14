import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          content={post.content}
          created={post.created}
        />
      ))}
    </>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
