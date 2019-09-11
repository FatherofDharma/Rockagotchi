import React from 'react'
import PropTypes from 'prop-types';
import rockStevenson from '../assets/rockStevenson.png'


function Rock(props) {
  const careNot = {
      textAlign: "center",
      backgroundColor: "red",
  }
  console.log(props);
  return(
    <div style={careNot}>
      <div >
        <img alt="It's a Rock" src={rockStevenson} />
      </div>
      <h1>Name: {props.rockStuff.name}</h1>
      <h2>Hunger: {props.rockStuff.hunger}</h2>
      <h2>Happiness: {props.rockStuff.happiness}</h2>
      <h2>Rest: {props.rockStuff.rest}</h2>
    </div>
  );
}

Rock.propTypes = {
  name: PropTypes.string,
  hunger: PropTypes.number,
  happiness: PropTypes.number,
  rest: PropTypes.number,
};

export default Rock;