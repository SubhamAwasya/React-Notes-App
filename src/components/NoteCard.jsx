import React from "react";
import { useEffect, useState } from "react";

import "./css/note_card.css";
import { Link } from "react-router-dom";

function NoteCard(props) {
  return (
    <Link to={`/show_note/${props.id}`} className="card-container">
      <div dangerouslySetInnerHTML={{ __html: props.data }} />
    </Link>
  );
}

export default NoteCard;
