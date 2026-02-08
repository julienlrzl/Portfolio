import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Ptut = () => {
  const project = projectsData.find((p) => p.id === "Ptut");
  return <ProjectDetailLayout project={project} />;
};

export default Ptut;
