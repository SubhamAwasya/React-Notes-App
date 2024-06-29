import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import NoteCard from "./components/NoteCard.jsx";
import Context from "../context/GlobalContext.jsx";

function App() {
  const { notesIDs } = useContext(Context);

  return (
    <>
      <h1>NOTES</h1>
      <Link to={`/create_edit_note`}>Create</Link>
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
