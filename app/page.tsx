'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const jobs = ["Software", "Fullstack", "Web", "System", "Rust"];
  const [job, setJob] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJob((prev) => (prev + 1) % jobs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mx-10 mt-50 ml-50">
        <h2 className="text-7xl/12 font-light">Mike</h2>
        <h1 className="text-9xl font-bold">Karl</h1>
        <AnimatePresence mode="wait">
          <motion.h3
            key={jobs[job]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute text-4xl mt-2"
          >
            {jobs[job]} Entwickler
          </motion.h3>
        </AnimatePresence>
      </section>
    </>
  );
}