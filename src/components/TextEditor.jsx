import React, { useEffect, useContext, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";

import "./css/TextEditor.css";
import JoditEditor from "jodit-react";

import GlobalContext from "../../context/GlobalContext.jsx";

export default function TextEditor({ id }) {
  const [previousContent, setPreviousContent] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { addNotesID, currentNoteId } = useContext(GlobalContext);

  // Jodit Config

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Take a note...",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      height: "calc(100vh - 70px)",
      enter: "div",
      statusbar: true,
      toolbarAdaptive: true,
      theme: "custom",
    }),
    []
  );

  useEffect(() => {
    if (id) {
      let data = localStorage.getItem(id);
      setContent(data);
      setPreviousContent(data);
    }
  }, []);

  function OnCreateNote() {
    addNotesID(currentNoteId);
  }

  function OnSaveNote() {
    localStorage.setItem(id, content);
  }

  function OnCancle() {
    if (id) {
      localStorage.setItem(id, previousContent);
    } else {
      localStorage.removeItem(currentNoteId);
    }
  }

  return (
    <div className="text-editor-container">
      <JoditEditor
        id="editor"
        ref={editor}
        config={config}
        value={content}
        onBlur={(newContent) => {
          localStorage.setItem(id || currentNoteId, newContent);
        }}
        onChange={(C) => setContent(C)}
      />
      <div className="text-editor-btn-container">
        {id ? (
          <>
            <Link to={"/show_note/" + id} onClick={OnSaveNote}>
              <button className="button-13">Save</button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/"} onClick={OnCreateNote}>
              <button className="button-13">Create</button>
            </Link>
          </>
        )}
        <Link to={"/"} onClick={OnCancle}>
          <button className="button-13">Cancle</button>
        </Link>
      </div>
    </div>
  );
}
