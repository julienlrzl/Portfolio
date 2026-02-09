import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Elk = () => {
  const project = projectsData.find((p) => p.id === "Elk");
  return <ProjectDetailLayout project={project} />;
};

export default Elk;
