import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default function DeleteButton({ id }) {
  const deleteHandler = async () => {
    const confirmed = confirm("do you really want to delete this topic?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/notes/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Unable to delete topic");
        }

        return res.json();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <button onClick={deleteHandler}>
      <AiFillDelete size={20} className="text-red-600 hover:text-red-500" />
    </button>
  );
}
