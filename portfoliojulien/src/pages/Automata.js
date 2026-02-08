import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Automata = () => {
  const project = projectsData.find((p) => p.id === "Automata");
  return <ProjectDetailLayout project={project} />;
};

export default Automata;
