import { groq } from "next-sanity";
import React from "react";
import About from "../components/About";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import { client } from "../lib/sanity.client";

const skills = groq`*[_type == "skill"]`;
const projects = groq`*[_type == "project"]`;

async function Homepage() {
  const skillData = await client.fetch(skills);
  const projectData = await client.fetch(projects);

  return (
    <div className="bg-[#020202] h-screen ">
      <section id="about" className=" bg-packtrain bg-cover">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className=" bg-steps bg-cover">
        <Skills skills={skillData} />
      </section>

      {/* Projects */}
      <section id="projects" className=" bg-blob bg-cover">
        <Projects projects={projectData} />
      </section>
    </div>
  );
}

export default Homepage;
