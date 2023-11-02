import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditNote() {
  const [note, setNote] = useState({ title: "", description: "" });

  const navigate = useNavigate();

  const { id } = useParams();
  //   console.log(id);

  const getNoteById = async () => {
    try {
      const res = await fetch(`http://localhost:3000/notes/${id}`);
      const data = await res.json();
      const dataTopic = data.topic;
      setNote(dataTopic);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoteById();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!note.title || !note.description) {
      alert("fields should not be empty");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: note.title,
          description: note.description,
        }),
      });

      if (!res.ok) {
        throw new Error("error updating note");
      }

      navigate("/");

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id={id}
      onSubmit={submitHandler}
      className="mx-auto mt-5 flex w-[40%] flex-col justify-between gap-5 rounded-lg bg-gray-100 p-5"
    >
      <h1 className="text-medium text-center text-xl font-bold">
        EDIT NOTE FORM
      </h1>
      <div className="flex w-full flex-col gap-3">
        <label htmlFor="" className="text-lg font-medium">
          Title
        </label>
        <input
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          type="text"
          name=""
          id=""
          className="rounded-lg p-2"
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <label htmlFor="" className="text-lg font-medium">
          Description
        </label>
        <input
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
          type="text"
          name=""
          id=""
          className="rounded-lg p-2"
        />
      </div>
      <button className="rounded-lg bg-blue-400 p-2 font-medium text-white hover:bg-blue-300 active:bg-blue-200">
        Submit
      </button>
    </form>
  );
}
