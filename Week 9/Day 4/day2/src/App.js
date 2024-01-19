import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import "./components/User.css";
// import employees from "./users.json";
import React, { Component, useState } from "react";

// console.log(employees);

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Robots",
//       employees:[]
//     };
//   }
//   changeTitle = () => {
//     // this.state.title ='Users';
//     this.setState({ title: "My User" });
//     // console.log(this.state.title);
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=> res.json()
//     .then((data)=>{
//       console.log(data);
//       this.setState({employees:data})
//     }))
//   };
//   render() {
//     return (
//       <div className="userstyle">
//         <h1>{this.title}</h1>
//         <button onClick={this.changeTitle}>Change Title</button>
//         {this.state.employees.map((item, indx) => {
//           return <User userinfo={item} key={indx} />;
//         })}
//       </div>
//     );
//   }
// }

const App = () => {
  const { title, setTitle } = useState();
  const { users, setUsers } = useState([]);

  const changeTitle = () => {
    setTitle("My Users");
    getUsers();
  };

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Title</h1>
      <button onClick={changeTitle}>Change Title</button>
      <ul>
        {users ??
          users.map((item) => {
            return <User userinfo={item} key={item.id} />;
          })}
      </ul>
    </div>
  );
};

export default App;
