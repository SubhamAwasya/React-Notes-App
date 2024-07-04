import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Context from "../../context/GlobalContext.jsx";

import "./css/ShowNote.css";

function ShowNote() {
  const [displayData, setDisplayData] = useState(0);
  const { removeNotesID } = useContext(Context);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setDisplayData(localStorage.getItem(id));
  }, []);

  function OnDelete() {
    let canDelete = confirm("Are you sure you want to delete this note?");
    console.log(canDelete);
    if (canDelete) {
      removeNotesID(id);
      navigate("/");
    }
  }

  return (
    <div className="show-note-container">
      <h1 className="title">Show Note</h1>
      <div className="show-note-btn-container">
        <Link to={"/"}>
          <button className="button-13">Home</button>
        </Link>
        <Link to={`/create_edit_note/${id}`}>
          <button className="button-13">Edit</button>
        </Link>
        <Link onClick={OnDelete}>
          <button className="button-13">Delete</button>
        </Link>
      </div>
      {displayData && (
        <div
          className="note-container"
          dangerouslySetInnerHTML={{ __html: displayData }}
        />
      )}
    </div>
  );
}

export default ShowNote;
