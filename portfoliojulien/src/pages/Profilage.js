import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Profilage = () => {
  const project = projectsData.find((p) => p.id === "Profilage");
  return <ProjectDetailLayout project={project} />;
};

export default Profilage;
