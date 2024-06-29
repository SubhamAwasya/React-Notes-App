import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Context from "../../context/GlobalContext.jsx";

import "./css/ShowNote.css";

function ShowNote() {
  const [displayData, setDisplayData] = useState(0);
  const { removeNotesID } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    setDisplayData(localStorage.getItem(id));
  }, []);

  function OnDelete() {
    removeNotesID(id);
  }

  return (
    <>
      <div>ShowNote</div>
      <Link to={`/create_edit_note/${id}`}>Edit</Link>
      <Link to={`/`} onClick={OnDelete}>
        Delete
      </Link>
      <Link to={"/"}>Home</Link>
      {displayData && <div dangerouslySetInnerHTML={{ __html: displayData }} />}
    </>
  );
}

export default ShowNote;
