import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function Home() {
  const skills = {
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "CuPy", "OpenCV", "pandas"],
    Languages: ["Python", "C++"],
    Systems: ["Linux", "Docker", "Git"],
  };

  return (
    <div id="top" className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              AI & ML{" "}
              <span className="bg-lime-400 text-black px-3 py-2">
                Engineer
              </span>
            </h2>

            {/* About */}
            <p className="text-gray-400 text-lg mb-6">
              I am a Computer Science student focused on building scalable AI systems.
              My work spans deep learning, NLP, and real-time ML systems with strong
              emphasis on performance and deployment.
            </p>

            {/* Personal Details */}
            <div className="space-y-2 text-gray-300 text-sm mb-6">
              <p><span className="text-lime-400">Name:</span> Polavarapu Sri Suhas</p>
              <p><span className="text-lime-400">Phone:</span> +91-8340062039</p>
              <p><span className="text-lime-400">Email:</span> srisuhas12345@gmail.com</p>
              <p><span className="text-lime-400">College Email:</span> se23uari093@mahindrauniversity.edu.in</p>
            </div>

            {/* FIXED BUTTON */}
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-lime-300 transition"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lime-400/20 to-transparent p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-2xl p-6 space-y-4 flex flex-col items-center">

                <img
                  src={profile}
                  alt="profile"
                  className="w-40 h-40 object-cover rounded-xl border border-gray-700"
                />

                <div className="text-sm text-gray-400">📍 Hyderabad, India</div>
                <div className="text-sm text-gray-400">🎓 B.Tech CSE • Mahindra University</div>
                <div className="text-sm text-gray-400">⚡ Expected May 2027</div>

                <div className="pt-3 border-t border-gray-800 w-full text-center">
                  <p className="text-gray-400 text-sm">
                    <span className="text-lime-400">CGPA:</span> 9.02/10
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RESEARCH */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Research <span className="bg-lime-400 text-black px-2 py-1">Interests</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <p>• Natural Language Processing (LLMs, embeddings)</p>
            <p>• Deep Learning Optimization</p>
            <p>• Time Series Forecasting</p>
            <p>• Real-time ML Systems</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4">
            Technical <span className="bg-lime-400 text-black px-3 py-2">Skills</span>
          </h2>

          <p className="text-gray-400 mb-12">
            Tools and technologies I work with
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-lime-400/30 transition"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-lime-400/10 text-lime-400 px-4 py-2 rounded-lg text-sm border border-lime-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-8">
            Let's{" "}
            <span className="bg-lime-400 text-black px-3 py-2">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Open to collaborations, internships, and AI/ML projects.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://github.com/srisuahs"
              className="bg-gray-900 border border-gray-800 px-6 py-3 rounded-lg hover:border-lime-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/polavarapu-sri-suhas-837361322/"
              className="bg-gray-900 border border-gray-800 px-6 py-3 rounded-lg hover:border-lime-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:srisuhas12345@gmail.com"
              className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-lime-300"
            >
              Email
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Polavarapu Sri Suhas • Built with React
          </p>

        </div>
      </section>

    </div>
  );
}