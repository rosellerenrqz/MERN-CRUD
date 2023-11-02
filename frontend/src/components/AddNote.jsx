import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddNote() {
  const [values, setValues] = useState({ title: "", description: "" });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!values.title || !values.description) {
      alert("input should not be empty");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to post notes");
      }

      navigate("/");

      return res.json();
    } catch (error) {}
  };

  console.log(values);

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto mt-5 flex w-[40%] flex-col justify-between gap-5 rounded-lg bg-gray-100 p-5"
    >
      <h1 className="text-medium text-center text-xl font-bold">
        ADD NOTE FORM
      </h1>
      <div className="flex w-full flex-col gap-3">
        <label htmlFor="" className="text-lg font-medium">
          Title
        </label>
        <input
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
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
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
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
