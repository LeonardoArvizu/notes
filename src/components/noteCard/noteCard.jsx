import React from "react";
import cssModule from "./noteCard.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

const NoteCard = ({ title, description, id, setNotes }) => {
  const deleteNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || []);
    console.log(notes);
    const notesFiltered = notes.filter((note) => note.id !== id);
    console.log(notesFiltered);
    if (notesFiltered.length === 0) {
      localStorage.removeItem("notes");
    } else {
      localStorage.setItem("notes", JSON.stringify(notesFiltered));
    }
    setNotes(notesFiltered);
  };

  return (
    <div className={cssModule["note-card-container"]}>
      <div className={cssModule["note-card"]}>
        <div className={cssModule["title"]}>{title}</div>
        <div className={cssModule["line-divider"]}></div>
        <div className={cssModule["description"]}>{description}</div>
        <div
          className={cssModule["delete-icon-container"]}
          onClick={deleteNotes}
        >
          <FaRegTrashAlt className={cssModule["delete-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
