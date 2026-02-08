import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Sokoban = () => {
  const project = projectsData.find((p) => p.id === "Sokoban");
  return <ProjectDetailLayout project={project} />;
};

export default Sokoban;
