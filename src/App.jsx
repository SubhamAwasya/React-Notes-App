import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import NoteCard from "./components/NoteCard.jsx";
import Context from "../context/GlobalContext.jsx";

function App() {
  const { notesIDs } = useContext(Context);

  return (
    <>
      <h1 className="title">NOTES</h1>
      <Link class="create-btn" to={`/create_edit_note`}>
        <div class="sign">+</div>
        <div class="text">Create</div>
      </Link>

      <div className="grid-container">
        {notesIDs.map((element) => (
          <NoteCard
            key={element}
            id={element}
            data={localStorage.getItem(element)}
          />
        ))}
      </div>
      {notesIDs.length === 0 && <h1>You don't have any notes</h1>}
    </>
  );
}

export default App;
