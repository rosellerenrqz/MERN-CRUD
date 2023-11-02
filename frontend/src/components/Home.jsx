import React, { useState, useEffect } from "react";
import NotesLists from "./NotesLists";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const fetchNote = async () => {
    try {
      const res = await fetch("http://localhost:3000/notes");

      const data = await res.json();
      setNotes(data.topic);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <>
      <NotesLists notes={notes} />
    </>
  );
}
