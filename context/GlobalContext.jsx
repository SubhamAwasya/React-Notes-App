import React, { useEffect, useState } from "react";

export const Context = React.createContext();

function GlobalContext({ children }) {
  const [notesIDs, setNotesIDs] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(0);
  const [editNoteId, setEditNoteId] = useState(0);

  // Add new note index into local storage
  function addNotesID(id) {
    setCurrentNoteId((prev) => prev + 1);
    setNotesIDs((prev) => [...prev, id]);
    localStorage.setItem("currentNoteId", currentNoteId);
    localStorage.setItem("notesIDs", JSON.stringify([...notesIDs, id]));
  }

  // Remove note index from local storage
  function removeNotesID(id) {
    let newIndex = notesIDs.filter((element) => {
      if (element != id) {
        return true;
      } else {
        localStorage.removeItem(Number(id));
        return false;
      }
    });
    setNotesIDs(newIndex);
    localStorage.setItem("notesIDs", JSON.stringify(newIndex));
  }

  // getting and setting current note id from local storage
  useEffect(() => {
    let cNID = localStorage.getItem("currentNoteId");

    if (cNID !== null) {
      setCurrentNoteId(Number(cNID) + 1);
    } else {
      setCurrentNoteId(0);
      localStorage.setItem("currentNoteId", 0);
    }
  }, []);

  // getting and setting notes ids from local storage
  useEffect(() => {
    let notes = localStorage.getItem("notesIDs");

    if (notes !== null) {
      setNotesIDs(JSON.parse(notes));
    } else {
      setNotesIDs([]);
      localStorage.setItem("notesIDs", JSON.stringify([]));
    }
  }, []);

  return (
    <Context.Provider
      value={{
        notesIDs,
        addNotesID,
        currentNoteId,
        setCurrentNoteId,
        editNoteId,
        setEditNoteId,
        removeNotesID,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
export { GlobalContext };
