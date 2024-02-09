import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [isDefaultColor, setIsDefaultColor] = useState(true);

  const toggleBackgroundColor = () => {
    const newColor = isDefaultColor ? 'blue' : 'white';
    setBackgroundColor(newColor);
    setIsDefaultColor(!isDefaultColor); // Toggle the state
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
      <h1>Background Color Changer</h1>
      <button onClick={toggleBackgroundColor}>
        {isDefaultColor ? 'Change color' : 'Back to default'}
      </button>
    </div>
  );
}

export default App;
