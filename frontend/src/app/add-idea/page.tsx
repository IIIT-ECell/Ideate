"use client";
import React, { useState } from "react";

interface Idea {
  title: string;
  description: string;
  tags: string[];
}

const AddIdeas: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newIdea: Idea = {
      title: title,
      description: description,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    console.log(newIdea); //TODO: send to database
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-24">
      <h1 className="py-4 text-6xl">Add Idea</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-white">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-slate-900 text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-slate-900 text-white focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Tags:</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-slate-900 text-white focus:outline-none focus:border-blue-500"
          />
          <small className="text-xs text-gray-400">
            Separate tags by commas
          </small>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Idea
        </button>
      </form>
    </div>
  );
};

export default AddIdeas;
