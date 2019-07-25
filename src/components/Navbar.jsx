import React, { useState } from 'react';
import useDarkMode from './../hooks/useDarkMode';

const Navbar = () => {
  const [isDark, setIsDark] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setIsDark(!isDark);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div className={useDarkMode(isDark)}>
          <div
            onClick={toggleMode}
            className= { isDark ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// ## STEP 3 - Using the hook in a component

// - Looking at this component, we see that we are controlling the toggle with some state. The state hook here returns a `darkMode` value, and a `setDarkMode` function. Isn't that exactly what our `useDarkMode` hook returns as well? Replace the state hook with our hook, click the toggle, and watch the magic happen!!!

// (If it wasn't magical, you have a bug somewhere 😫 go back through the steps slowly, one at a time, to see if you missed any of the steps)
