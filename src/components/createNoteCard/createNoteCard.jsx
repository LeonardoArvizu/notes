import React from "react";
import cssModule from "./createNoteCard.module.css";
import { FaPlus } from "react-icons/fa";

const CreateNoteCard = () => {

  const onClick = () => {
    
  }

  return (
    <div className={cssModule.background} onClick={onClick}>
        <FaPlus className={cssModule.icon} />
    </div>
  )
}

export default CreateNoteCard;