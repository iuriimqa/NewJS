import React,{Component} from "react";
import "./Exercise3.css";

class Exercise3 extends Component{
    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return(
        <>
            <h1 style={style_header}>This is Header</h1>
            <p className="para">This is paragraph</p>
            <a href="#">This ia a link</a>
            <form>
                <input type="text"/><input type="submit"/>
            </form>
            <img src="../public/vite.svg"/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>


        </>)
    }

}

export default Exercise3