import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const changeBackgroundColor = () => {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: "100vh" }}>
      <h1>Background Color Changer</h1>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
  );
}

export default App;
