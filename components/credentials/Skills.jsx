"use client";

import { useEffect, useState } from "react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState({});

  const skills = [
    {
      title: "Frontend",
      abilities: [
        { sub_title: "Core", technologies: ["HTML", "CSS", "Javascript"] },
        {
          sub_title: "Libs & Fwks",
          technologies: ["Bootstrap", "Tailwind CSS", "Vue JS", "React JS"],
        },
      ],
    },
    {
      title: "Backend",
      abilities: [
        {
          sub_title: "Frameworks",
          technologies: ["Express JS", "Next JS", "Flask"],
        },
        {
          sub_title: "Languages",
          technologies: ["Node JS", "PHP", "Python", "C++"],
        },
      ],
    },
    {
      title: "Databases",
      abilities: [
        { sub_title: "Databases", technologies: ["SQL", "Mongo DB"] },
        {
          sub_title: "Cloud DBs",
          technologies: ["Firebase", "Supabase", "Mongo DB Atlas"],
        },
      ],
    },
    {
      title: "CMS",
      abilities: [
        {
          sub_title: "CMS Platforms",
          technologies: ["WordPress", "Contentful", "Sanity"],
        },
      ],
    },
    {
      title: "Others",
      abilities: [
        { sub_title: "UI/UX Design", technologies: ["Layouts", "Prototyping"] },
        { sub_title: "Development Practices", technologies: ["MVC", "OOP"] },
        { sub_title: "Project Management", technologies: ["Problem Solving"] },
        {
          sub_title: "Communication",
          technologies: ["Formal Writing", "Documentation"],
        },
      ],
    },
  ];

  useEffect(() => setActiveSkill(skills[0]), []);

  return (
    <div className="flex flex-col shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-start">
        <div className="w-full lg:max-w-1/2">
          <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
            Abilities &amp; Capabilities
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
            Skills<span className="text-primary">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content">
            I am a digital chameleon.
          </h2>
        </div>
        <div className="w-full lg:max-w-1/2 flex flex-col justify-start gap-5">
          <ul className="flex flex-row lg:justify-evenly overflow-x-auto gap-0">
            {skills.map((skill, index) => {
              const { title } = skill;
              return (
                <li
                  key={index}
                  className={`p-3 border-b-4 border-dark font-bold cursor-pointer ${
                    title === activeSkill.title
                      ? "border-primary text-primary"
                      : "border-dark text-base-content"
                  }`}
                  onClick={() => setActiveSkill(skill)}
                >
                  {title}
                </li>
              );
            })}
          </ul>
          <div className="max-w-3/4">
            <div className="card w-full">
              <div className="card-body bg-dark">
                {activeSkill?.abilities?.length > 0
                  ? activeSkill.abilities.map((ability, index) => {
                      const { sub_title, technologies } = ability;
                      return (
                        <div key={index} className="mb-5">
                          <h2 className="text-base font-semibold">
                            {sub_title}
                          </h2>
                          <div className="flex flex-row flex-wrap gap-1">
                            {technologies.map((tech, index) => (
                              <div
                                key={index}
                                className="stat-desc badge-sm badge badge-primary font-bold rounded-sm"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;