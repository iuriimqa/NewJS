import React,{useState} from 'react';
import Garage from './Garage';



const Car = (props) => {
    const [color,setColor] = useState('red');
    return(
        <>
        <Garage size="small" />
        <h1>This car is {color} {props.name}</h1>
        </>
    )
}

export default Car