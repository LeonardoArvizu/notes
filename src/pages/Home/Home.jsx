import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cssModule from "./home.module.css";

//Components
import NoteCard from "../../components/noteCard/noteCard";
import CreateNoteCard from "../../components/createNoteCard/createNoteCard";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";

import { FaLongArrowAltLeft } from "react-icons/fa";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    const getNotes = JSON.parse(localStorage.getItem("notes"));
    if (!getNotes) {
      return;
    }
    setNotes(getNotes);
  }, [navigate]);

  const onLogout = () => {
    setLoading(true);
    localStorage.removeItem("isAuthenticated");
    setLoading(false);
    navigate("/");
  };

  const onCreateNoteCard = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={cssModule.background}>
      {modalOpen ? (
        <div className={cssModule["modal-container"]}>
          <Modal onClose={onCloseModal} setNotes={setNotes}></Modal>
        </div>
      ) : null}
      <header className={cssModule["header"]}>
        {loading ? (
          Loading
        ) : (
          <div className={cssModule["logout-container"]} onClick={onLogout}>
            <div className={cssModule["logout-icon"]}>
              <FaLongArrowAltLeft />
            </div>
            <p className={cssModule["logout-text"]}>Cerrar sesión</p>
          </div>
        )}
      </header>
      <div className={cssModule["cards"]}>
        {notes.map((note) => {
          return (
            <div className={cssModule["note-card"]}>
              <NoteCard
                title={note.title}
                description={note.description}
                id={note.id}
                setNotes={setNotes}
              />
            </div>
          );
        })}
        <div
          className={cssModule["create-note-card"]}
          onClick={onCreateNoteCard}
        >
          <CreateNoteCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
