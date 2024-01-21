import React, { useState } from 'react';

const Event = () => {
  const [key, setKey] = useState('Enter');
  const [input,setInput] = useState('');

  const handleKeyDown = (event) => {
    setKey(event.key);
  };

  const InputChange = (event) => {
    setInput(event.target.value);
  };

  const inputv = key;

  const handleData = (event) =>{
    event.preventDefault();
    alert(`The ${key} was pressed, your input is:${input} `)
    
  }

  const [isToggleOn,setIsToggleOn] = useState(true)


  const changeToggle = () =>{
    if(isToggleOn === true){
      setIsToggleOn(false)
    }else{setIsToggleOn(true)}
  }

  return (
    <div> 
      <form onSubmit={handleData}>
        <input type='text' placeholder="Press Enter key" onKeyDown={handleKeyDown} onChange={InputChange} />
        <button type="submit">Press Me</button>
      </form>

      <p>Exercise 9:</p>
      <button onClick={changeToggle} >{isToggleOn === true? "ON": "OFF"}</button>
    </div>
  );
};

export default Event;
