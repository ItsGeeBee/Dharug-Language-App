// import React from "react";
import Project from "../Project/index.js";
import '../Project/style.css'

// Portfolio section assigning the images and info to each individual card
function Dictionary(props) {
  const featurePhotos = [
    {
      name: "",
      feature: "",
      url: (
        <a>
          Word One
        </a>
      ),
      repo: (
        <a>
          Word One
        </a>
      ),
    },
    {
      name: "",
      feature: "",
      url: (
        <a>
          Word Two
        </a>
      ),
      repo: (
        <a>
          Word Two
        </a>
      ),
    },
    {
      name: "",
      feature: "",
      url: (
        <a>
          Word Three
        </a>
      ),
      repo: (
        <a>Word Three</a>
      ),
    },
    {
      name: "",
      feature: "",
      url: (
        <a>
          Word Four
        </a>
      ),
      repo: (
        <a>
          Word Four
        </a>
      ),
    },
    {
      name: "",
      feature: "",
      url: (
        <a>
          Word Five
        </a>
      ),
      repo: (
        <a>
          Word Five
        </a>
      ),
    },
    {
      name: "",
      feature: "",
      url: (
        <a>
          Word Six
        </a>
      ),
      repo: (
        <a>
          Word Six
        </a>
      ),
    },
  ];
  // returns the project file
  return (
    <div className="">
      {featurePhotos.map((project) => (
        <Project data={project} />
      ))}
    </div>
  );
}

export default Dictionary;
