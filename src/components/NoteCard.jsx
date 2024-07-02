import React from "react";
import { useEffect, useState } from "react";

import "./css/note_card.css";
import { Link } from "react-router-dom";

function NoteCard(props) {
  const Colors = [
    "#ff7043",
    "#ff7043",
    "#ff8a65",
    "#ffab91",
    "#689f38",
    "#7cb342",
    "#9ccc65",
    "#aed581",
    "#26a69a",
    "#4db6ac",
    "#80cbc4",
    "#b2dfdb",
    "#ffca28",
    "#fdd835",
    "#ffee58",
    "#fff176",
  ];

  let color = Colors[Math.floor(Math.random() * Colors.length)];

  // const r = Math.floor(Math.random() * 200) + 55;
  // const g = Math.floor(Math.random() * 200) + 55;
  // const b = Math.floor(Math.random() * 200) + 55;

  // console.log(r, g, b);
  // color = `rgb(${r}, ${g}, ${b})`;

  return (
    <Link
      style={{ backgroundColor: color }}
      to={`/show_note/${props.id}`}
      className="card-container"
    >
      <div dangerouslySetInnerHTML={{ __html: props.data }} />
    </Link>
  );
}

export default NoteCard;
