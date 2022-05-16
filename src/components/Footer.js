import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Footer() {
  return (
    <div>
      <h5 className="text-center">Portfolio last updated 5/20/2022</h5>
    </div>
  );
}