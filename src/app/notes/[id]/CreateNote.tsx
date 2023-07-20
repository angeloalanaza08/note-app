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
    <form onSubmit={create}>
      <h3>Create A Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={Content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Note</button>
    </form>
  );
}
