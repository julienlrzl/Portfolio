import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Vulnhub = () => {
  const project = projectsData.find((p) => p.id === "Vulnhub");
  return <ProjectDetailLayout project={project} />;
};

export default Vulnhub;
