import React, { useState } from 'react';

// haven't made changes to this yet, but I think its sort of the concept I want to pull from
// taken from mini project, bucket.js component, making big changes and seeing if thats all i need

//definitely need to work a lot on this section

// example of when i call the Project and the props that i pass in:
{/* <Project 
  image={img1} 
  title='Planet Planters' 
  linkDeployed='https://planetplanters.herokuapp.com/' 
  linkGitHub='https://github.com/ultimatejayfox/Planet-Planters'/> */}

function Project(props) {

  // i will use these: props.image props.title props.linkDeployed props.linkGitHub
  // i may need to include " " to surround the props?:
  return <div>
    <a href={props.linkDeployed} target="_blank">
      <h3>{props.title}</h3>
      <img src={props.image} alt="screenshot of project" width="460" height="300">
    </a>
    <ul>
      <li><a href={props.linkGitHub}>Repository</a> - <a href={props.linkDeployed}>Deployed Version</a></li>
    </ul>
  </div>;
  
};

export default Project;