import React, { useContext, createContext, useState } from "react";

const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [id, setId] = useState(0);

  return (
    <notesContext.Provider value={{ id, setId }}>
      {children}
    </notesContext.Provider>
  );
};

export const useNotes = () => useContext(notesContext);
