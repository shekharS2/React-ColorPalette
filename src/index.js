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
        <div>
          <button style={buttonStyle}
            onClick={props.chooseColor}
          >
          </button>

        </div>
    );
}

function InputPalette(props){
  
  
  return (
      <div class="flex-container">
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
  
  const [colors] = useState(['Black', 'Red', 'Green', 'Brown', 'Yellow', 'Blue', 'Orange', 'Purple', 'Pink']);
  let [color, setColor] = useState('Color not chosen');

  
  return (
    <div>
      <div class="flex-container">
        <InputPalette
          colors = {colors}
          setColor = {(choosenColor) => toggleColor(choosenColor, color, setColor)}
        />
      </div>
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