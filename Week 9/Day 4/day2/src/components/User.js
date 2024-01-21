import "./User.css";
import React from "react";

class User extends React.Component {
//   constructor() {
//     super();
//   }
  render() {
    const {name,email,id,username } = this.props.userinfo;
    return(
    <div className='tc bg-light-green br3 ma2 dib bw2 grow shadow-5'>
               <img src={`https://robohash.org/${id}?size=150x150`} alt=""></img>
                 <h2>{name}</h2>
                 <h3>{email}</h3>
                <h4>{username}</h4>
    
             </div>
  )}
}

// import Button  from "react-bootstrap/Button";

// const User = (props) =>{
//     console.log(props);
//     const {name,email,id,username } = props.userinfo;
//     return (
//         <div className='tc bg-light-green br3 ma2 dib bw2 grow shadow-5'>
//             <img src={`https://robohash.org/${id}?size=150x150`} alt=""></img>
//             <h2>{name}</h2>
//             <h3>{email}</h3>
//             <h4>{username}</h4>

//         </div>
//     )
// }

export default User;
