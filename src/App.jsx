import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import NoteCard from "./components/NoteCard.jsx";
import Context from "../context/GlobalContext.jsx";

const App = () => {
  const { notesIDs } = React.useContext(Context);

  return (
    <>
      <h1 className="title">NOTES</h1>
      <Link className="create-btn" to="/create_edit_note">
        <div className="sign">+</div>
        <div className="text">Create</div>
      </Link>

      <div className="grid-container">
        {notesIDs.map((element, i) => (
          <NoteCard
            key={element}
            id={element}
            index={i}
            data={localStorage.getItem(element)}
          />
        ))}
      </div>

      {notesIDs.length === 0 && (
        <div className="no-notes-msg">
          <h1>You don&apos;t have any notes.</h1>
          <h3>
            To create one click on the
            <strong> +</strong> button
          </h3>
        </div>
      )}
    </>
  );
};

export default App;
