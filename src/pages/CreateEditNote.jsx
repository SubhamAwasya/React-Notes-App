import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./css/CreateEditNote.css";

import TextEditor from "../components/TextEditor.jsx";
function CreateEditNote() {
  const { id } = useParams();
  return (
    <div className="create_edit_note-container">
      <TextEditor id={id}></TextEditor>
    </div>
  );
}

export default CreateEditNote;
