import React, { useEffect, useState } from "react";

const getStorageTheme = () => {
    let theme = 'dark-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

const BgColor = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const changeBgColor = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button onClick={() => changeBgColor()} className="bg-btn">
        {theme === "light-theme" ? "Dark" : "Light"}
      </button>
    </>
  );
};

export default BgColor;
