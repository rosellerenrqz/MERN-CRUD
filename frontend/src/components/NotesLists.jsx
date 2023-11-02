import React from "react";
import { AiFillEdit } from "react-icons/ai";
import DeleteButton from "./DeleteButton";

export default function NotesLists({ notes }) {
  console.log(notes);

  return (
    <>
      {notes.map((note) => (
        <main
          key={note._id}
          className="mx-auto mt-5 flex w-[40%] justify-between rounded-lg bg-gray-50 p-5"
        >
          <div className="flex-col gap-2">
            <h1 className="text-xl">{note.title}</h1>
            <p className="text-base">{note.description}</p>
            <span className="text-sm">{note.createdAt}</span>
            <span className="text-sm">{note.updatedAt}</span>
          </div>
          <div className="flex items-start gap-3">
            <a href={`/edit-note/${note._id}`}>
              <AiFillEdit size={20} className="hover:opacity-70" />
            </a>
            <DeleteButton id={note._id} />
          </div>
        </main>
      ))}
    </>
  );
}
