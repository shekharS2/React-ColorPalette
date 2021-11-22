import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function OutputColor(props){
  let divStyle = props.choosenColor === "Color not chosen" ? {'background' : 'white'} : {'background' : props.choosenColor};
  return (
    <div class ="output" style = {divStyle}>
      <p>{
        props.choosenColor === "Color not chosen" ? props.choosenColor : ""
      }</p>
    </div>

  );
}


function InputColor(props){
    let buttonStyle = {
      'background-color' : props.color
    };
    return (
        <div class = "palette-child output-palette-child">
          <button style={buttonStyle}
            onClick={props.chooseColor}
          >
          </button>

        </div>
    );
}

function InputPalette(props){
  
  
  return (
      <div class="palette-container output-palette-child">
        {
          props.colors.map((color) => {
            return (
              <>
                <InputColor
                  color = {color}
                  chooseColor = {() => {props.setColor(color)}}
                />
              </>
            );
          })
        }
      </div>
      
  );
}


function ColorApp() {
  
  const [colors] = useState(['Black', 'Red', 'Green', 'Brown', 'Yellow', 'Blue', 'Orange', 'Purple', 'Pink', 'Lawngreen']);
  let [color, setColor] = useState('Color not chosen');

  
  return (
    <div class="output-palette-container">

      <InputPalette
        colors = {colors}
        setColor = {(choosenColor) => toggleColor(choosenColor, color, setColor)}
      />

      <OutputColor choosenColor = {color}/>
      
    </div>
  );
}





ReactDOM.render(
  <ColorApp />,
  document.getElementById('root')
);


const toggleColor = (choosenColor, color, setColor) => {
  if(choosenColor === color){
    choosenColor = "Color not chosen";
  }
  setColor(choosenColor);
  console.log(color);
}