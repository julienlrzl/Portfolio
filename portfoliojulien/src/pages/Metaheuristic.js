import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const Metaheuristic = () => {
  const project = projectsData.find((p) => p.id === "Metaheuristic");
  return <ProjectDetailLayout project={project} />;
};

export default Metaheuristic;
