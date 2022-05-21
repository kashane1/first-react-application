import React from 'react';
import headshot from '../assets/headshot1.jpg';

export default function About() {
  return (
    <div className='container'>
      <h2 className='text-center p-2'>About Me:</h2>
      <div className='d-flex justify-content-center'>
        <img src={headshot} alt="headshot of Kashane and his dog" width="350" height="450" />
      </div>
      <ul className='p-3 list-group'>
        <li>I'll keep it short and sweet! -</li>
        <li>That's a picture of myself and Toto. I know, it's hard to tell which one of us is more photogenic.</li>
        <li>I was born and raised in Los Angeles, California. My father immigrated from Bangkok, Thailand, and my mother, who is of Irish and English decent, was born in Los Angeles.</li>
        <li>I've always had a knack for mathematics and problem solving. For the last couple of years I've explored an old interest of mine which is software engineering. On my nonstop journey of learning, I've come to the conclusion that I was born to be a programmer!</li>
      </ul>
    </div>
  );
}
