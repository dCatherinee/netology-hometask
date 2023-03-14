import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateNewPost from "./components/CreateNewPost/CreateNewPost";
import InfoPost from "./components/InfoPost/InfoPost";
import MainPage from "./components/MainPage/MainPage";
import { useEffect, useState } from "react";
import { deleteData, getData, postData } from "./api";

const URL = "http://localhost:7777/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const [isDelete, setDelete] = useState(false);

  useEffect(() => {
    getData(URL)
      .then((data) => setPosts(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getData(URL)
      .then((data) => setPosts(data))
      .catch((e) => console.log(e));

    setNewPost(false);
  }, [newPost]);

  useEffect(() => {
    getData(URL)
      .then((data) => setPosts(data))
      .catch((e) => console.log(e));

    setDelete(false);
  }, [isDelete]);

  const addNewPost = (post) => {
    postData(URL, post)
      .then((data) => console.log("func add: ", data))
      .catch((e) => console.log(e));

    setNewPost(true);
  };

  const deletePost = (id) => {
    deleteData(URL, id)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));

    setDelete(true);
  };

  const postById = (id) => {
    const post = posts.find((el) => el.id == id);
    return post;
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage posts={posts} />} />
        <Route
          path="/posts/new"
          element={<CreateNewPost onAdd={addNewPost} />}
        />
        <Route
          path="/posts/:id"
          element={
            <InfoPost
              getPost={postById}
              onEditPost={addNewPost}
              onDelete={deletePost}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
