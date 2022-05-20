import React from 'react';

function Project(props) {

  return <div className="d-block p-3 justify-content-center">
    <a href={props.linkDeployed} target="_blank" rel="noreferrer">
      <h3 className="text-center">{props.title}</h3>
      <img src={props.image} alt="screenshot of project" width="460" height="300" />
    </a>
    <ul>
      <li className="text-center"><a href={props.linkGitHub}>Repository</a> - <a href={props.linkDeployed}>Deployed Version</a></li>
    </ul>
  </div>;
  
};

export default Project;