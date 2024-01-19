import React, { Component } from "react";
import Exercise from "./Exercise";

class UserFavAnimals extends Component {
  render() {
    const  {animals}  = this.props;
    // console.log(animals);
    return (
      <div>
        <h2>Your Favorite Animals:</h2>
        <ul>
        {/* <h2>{animals}</h2> */}

          {animals.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavAnimals;
