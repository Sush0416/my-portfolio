import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  // ✅ Only one projects array
  const projects = [
    {
      id: 1,
      title: "AI Career Coach",
      tags: ["AI", "Full-stack", "Career"],
      description:
        "AI-powered web app that gives personalized career guidance using AI APIs. Authentication and dashboard completed; interview feedback integration in progress.",
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "DELISH — Food Delivery & Tiffin App",
      tags: ["MERN", "Payments", "FoodTech"],
      description:
        "MERN-based food ordering & tiffin service platform with dish-based search, Stripe payments, and user management. Admin panel functional; deployment pending.",
      status: "Prototype",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "DSA Visualizer",
      tags: ["Algorithms", "Education"],
      description:
        "Interactive tool to visualize Data Structures & Algorithms with step-by-step animations. Arrays & Linked Lists complete; Trees planned.",
      status: "Planned",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // ✅ Generate unique tags
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  // ✅ Filtering projects
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            SUSHMITA KATARIYA
          </h1>
          <p className="text-sm text-gray-600">
            Aspiring AI Engineer • MERN Developer • Problem Solver
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-md bg-black text-white text-sm shadow"
          >
            Download Resume
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Bridging{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
                AI and Software
              </span>{" "}
              to solve real-world challenges.
            </motion.h2>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg text-gray-700"
            >
              I am a Computer Science student passionate about AI/ML,
              full-stack development, and backend optimization. Certified in
              cybersecurity, networking, and database systems, I love building
              impactful solutions.
            </motion.p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white"
              >
                See projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border"
              >
                Let's talk
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com/in/sushmita-katariya-183926267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border">
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-14">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Projects</h3>
            <div className="flex gap-2">
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filter === t
                      ? "bg-indigo-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow"
              >
                <div className="relative h-44">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-3 bottom-3 bg-black/60 px-3 py-1 rounded text-white text-xs">
                    {p.tags.join(" • ")}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 border text-gray-700">
                      {p.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
