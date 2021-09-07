import React from 'react';
import './style.css';

export default function App() {
  const keyDown = e => {
    if (
      e.key === 'a' ||
      e.key === ' e' ||
      e.key === 'i' ||
      e.key === 'o' ||
      e.key === 'u'
    ) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onKeyDown={keyDown} />
    </div>
  );
}
