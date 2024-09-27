import React from "react";

import projects from "../../data/protects.json";
import { getImageUrl } from "../../utils";

const Projects = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <div>
        {projects.map((project, id) => {
          return (
            <div key={id}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`Image ${project.title}`}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                <div>
                  <a href={project.demo}>Behance</a>
                  <img src={getImageUrl("vetor/Vector.png")} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
