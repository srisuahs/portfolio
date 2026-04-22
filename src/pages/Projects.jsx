import React from "react";
import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Word2Vec Skip-Gram with GPU Acceleration",
      tech: ["Python", "CuPy", "NumPy", "Git"],
      github: "https://github.com/srisuahs/Word2Vec-from-Scratch-GPU",
      description: "Engineered a memory-efficient pipeline...",
      highlights: ["Custom XML parsing", "GPU optimization"],
      year: "2024"
    },
    {
      title: "Conversational AI",
      tech: ["PyTorch", "Transformers"],
      github: "https://github.com/srisuahs/Anime_chatbot",
      description: "Transformer chatbot",
      highlights: ["Multi-turn dialog"],
      year: "2024"
    }
  ];

  return (
    <section className="bg-black text-white min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-4">
          Featured <span className="bg-lime-400 text-black px-3 py-2">Projects</span>
        </h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              onClick={() => setActiveProject(idx)}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <a href={project.github} className="text-lime-400">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}