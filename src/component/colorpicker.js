import React, { useState } from "react";

const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];

export default function ColorPicker() {
  const [color, setColor] = useState("Tomato");

  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <h1>Lezione: uso di State con array e metodo map</h1>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)} key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
}
