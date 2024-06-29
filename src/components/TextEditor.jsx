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
      placeholder: "",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      height: 400,
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
    <>
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

      {id ? (
        <>
          <Link to={"/show_note/" + id} onClick={OnSaveNote}>
            <button class="button-13">Save</button>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/"} onClick={OnCreateNote}>
            <button class="button-13">Create</button>
          </Link>
        </>
      )}
      <Link to={"/"} onClick={OnCancle}>
        <button class="button-13">Cancle</button>
      </Link>
    </>
  );

  // return (
  //   <div id="quill-container" style={{ width: "100%", height: 300 }}>
  //     <div ref={quillRef} />
  //     {id ? (
  //       <>
  //         <Link to={"/show_note/" + id} onClick={OnSaveNote}>
  //           Save
  //         </Link>
  //         <Link to={"/"} onClick={OnCancle}>
  //           Cancle
  //         </Link>
  //       </>
  //     ) : (
  //       <>
  //         <Link to={"/"} onClick={OnCreateNote}>
  //           Create
  //         </Link>
  //         <Link to={"/"} onClick={OnCancle}>
  //           Cancle
  //         </Link>
  //       </>
  //     )}
  //   </div>
  // );
}
