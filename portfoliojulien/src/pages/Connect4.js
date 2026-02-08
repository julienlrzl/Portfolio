import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Connect4 = () => {
  const project = projectsData.find((p) => p.id === "Connect4");
  return <ProjectDetailLayout project={project} />;
};

export default Connect4;
