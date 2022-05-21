import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Footer() {
  return (
    <div className='mt-auto'>
      <div>
        <h6 className='text-center'>
          Portfolio last updated 5/20/2022 - <a href="https://github.com/kashane1">GitHub</a> - <a href="https://www.linkedin.com/in/kashanesakhakorn/">LinkedIn</a> - <a href="https://twitter.com/kashane27">Twitter</a>
        </h6>
      </div>
    </div>
  );
}