import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Owasp = () => {
  const project = projectsData.find((p) => p.id === "Owasp");
  return <ProjectDetailLayout project={project} />;
};

export default Owasp;
