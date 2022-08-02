import React, { useState } from 'react';
import './ColorBox.scss';

const getRandomColor = () => {
  const COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];
  const randomColor = Math.floor(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomColor];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'deeppink';
    return initColor;
  });

  const handleChangeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem('box-color', newColor);
  };

  return (
    <div className='color-box' style={{ backgroundColor: color }} onClick={handleChangeColor}></div>
  );
}

export default ColorBox;
