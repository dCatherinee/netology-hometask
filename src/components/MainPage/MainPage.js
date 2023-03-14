import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

const MainPage = ({ posts }) => {
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
};

MainPage.propTypes = {
  posts: PropTypes.array,
};

export default MainPage;
