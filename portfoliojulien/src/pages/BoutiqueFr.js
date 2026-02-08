import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import projectsData from "../data/projectsData";

const BoutiqueFr = () => {
  const project = projectsData.find((p) => p.id === "BoutiqueFr");
  return <ProjectDetailLayout project={project} />;
};

export default BoutiqueFr;
