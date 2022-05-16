import React from 'react';
import Project from '../Project';
import img1 from '.../assets/planet-planters-screenshot.jpg'; // might have trouble here with this file path
import img2 from '.../assets/coding-bff-screenshot.png';
import img3 from '.../assets/schedule-screenshot.jpg';
import img4 from '.../assets/weather-magic-screenshot.jpg';

export default function Portfolio() {
  return (
    <div>
      <h1>My Favorite Projects:</h1>
      <p>
        This will be a large section where I pull in Project.js:
      </p>
      <div>
        <Project 
          image={img1} 
          title='Planet Planters' 
          linkDeployed='https://planetplanters.herokuapp.com/' 
          linkGitHub='https://github.com/ultimatejayfox/Planet-Planters'/>
        <Project 
          image={img2} 
          title='Coding BFF' 
          linkDeployed='https://kashane1.github.io/alpha-1-prime/' 
          linkGitHub='https://github.com/kashane1/alpha-1-prime'/>
          
        <Project 
          image={img3} 
          title='Interactrive Schedule' 
          linkDeployed='https://kashane1.github.io/interactive-scheduling/' 
          linkGitHub='https://github.com/kashane1/interactive-scheduling'/>
          
        <Project 
          image={img4} 
          title='Weather Magic' 
          linkDeployed='https://kashane1.github.io/weather-magic/' 
          linkGitHub='https://github.com/kashane1/weather-magic'/>
      </div>
    </div>
  );
}

// notes here, on how to import an image and use it in react.js

// import Logo from "../src/Reactlogo.jpg";
// class App extends Component {
//   render() {
//     return <img src={Logo} />
//   }
// }