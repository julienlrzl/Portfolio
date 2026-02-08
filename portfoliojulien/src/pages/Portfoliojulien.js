import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Portfoliojulien = () => {
  const project = projectsData.find((p) => p.id === "Portfoliojulien");
  return <ProjectDetailLayout project={project} />;
};

export default Portfoliojulien;
