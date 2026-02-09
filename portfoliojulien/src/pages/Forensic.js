import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Forensic = () => {
  const project = projectsData.find((p) => p.id === "Forensic");
  return <ProjectDetailLayout project={project} />;
};

export default Forensic;
