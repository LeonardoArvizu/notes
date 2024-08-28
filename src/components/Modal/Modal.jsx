import React, { useRef } from "react";

//Icons
import { FaTimes } from "react-icons/fa";

//Css
import "./modal.css";

//Context
// import { useNotes } from "../../provider/notesProvider";

const Modal = ({ onClose, setNotes }) => {
  const title = useRef(null);
  const description = useRef(null);

  const onSave = () => {
    let id;
    let notesAdded;

    const notes = JSON.parse(localStorage.getItem("notes"));
    if (!notes || notes === null) {
      id = 0;
      notesAdded = [
        {
          id: id,
          title: title.current.value,
          description: description.current.value,
        },
      ];
    } else {
      notesAdded = [
        ...notes,
        {
          id: id,
          title: title.current.value,
          description: description.current.value,
        },
      ];
      id = notes[notes.length - 1] || 0;
    }
    try {
      localStorage.setItem("notes", JSON.stringify(notesAdded));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
    setNotes(notesAdded);
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="header">
          <FaTimes className="close" onClick={onClose} />
        </div>
        <div className="content">
          <input
            type="text"
            className="note-title"
            placeholder="Titulo"
            ref={title}
          ></input>
          <div className="line-divider"></div>
          <div className="note-description-container">
            <textarea
              className="note-description"
              placeholder="Descripción"
              ref={description}
            />
          </div>
          <div className="save-button-container">
            <button className="save-button" onClick={onSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
