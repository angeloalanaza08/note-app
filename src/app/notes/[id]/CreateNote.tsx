"use client";
import { useState } from "react";

export default function CreateNote() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Title, Content }),
    });
    setContent("");
    setTitle("");
  };
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={create}
        className=" bg-gray-900 w-fukk rounded-md p-6 mb-6 w-full md:w-full lg:w-1/2 xl:w-1/3"
      >
        <h3 className="my-6 text-left text-xl font-semibold uppercase">
          Create A Note
        </h3>
        <div className="flex flex-col gap-6 auto-rows-auto">
          <input
            type="text"
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md outline-0 bg-gray-800 text-white p-6 focus:border-blue-500 border border-slate-600 outline-none"
          />
          <textarea
            placeholder="Content"
            value={Content}
            onChange={(e) => setContent(e.target.value)}
            className="rounded-md bg-gray-800 text-white resize-none p-6 h-52 focus:border-blue-500 border border-slate-600 outline-none"
          />
          <button
            type="submit"
            className="bg-gray-800 rounded-md p-6 hover:bg-blue-900"
          >
            Create Note
          </button>
        </div>
      </form>
    </div>
  );
}
