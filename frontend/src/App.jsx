import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/edit-note/:id" element={<EditNote />} />
      </Routes>
    </>
  );
}
