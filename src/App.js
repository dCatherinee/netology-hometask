import { useState, useEffect } from "react";
import { RxUpdate } from "react-icons/rx";
import Notes from "./Components/Notes/Notes";
import Form from "./Components/Form/Form";
import { getNotes, postNotes, deleteNotes } from "./api";
import "./App.css";

const URL = "http://localhost:7777/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(false);
  const [noteDelete, setNoteDelete] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getNotes(URL)
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getNotes(URL)
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));

    setNewNote(false);
  }, [newNote]);

  useEffect(() => {
    getNotes(URL)
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));

    setNoteDelete(false);
  }, [noteDelete]);

  useEffect(() => {
    getNotes(URL)
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));

    setUpdate(false);
  }, [update]);

  const addNote = (note) => {
    postNotes(URL, note)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    setNewNote(true);
  };

  const deleteNote = (id) => {
    deleteNotes(URL, id)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));

    setNoteDelete(true);
  };

  const updateNotes = () => {
    setUpdate(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header__title">Notes</h1>
        <RxUpdate onClick={updateNotes} className="header__icon" />
      </div>
      <Notes notes={notes} onDelete={deleteNote} />
      <Form onAdd={addNote} />
    </div>
  );
}

export default App;
