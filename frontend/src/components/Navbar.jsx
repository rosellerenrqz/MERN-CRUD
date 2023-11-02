import React from "react";

export default function Navbar() {
  return (
    <nav className="mx-auto mt-5 flex w-[40%] justify-between rounded-lg bg-gray-50 p-5">
      <h1 className="text-lg font-medium">
        <a href="/">
          MERN <span className="font-medium text-blue-400">CRUD.</span>
        </a>
      </h1>
      <ul>
        <li className="text-lg font-medium">
          <a href="/add-note">Add Note</a>
        </li>
      </ul>
    </nav>
  );
}
