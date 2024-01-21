// import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Color from './components/Color';
import Event from './components/Events';
import Phone from './components/Phone';


function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
      {/* <Car name={carinfo.model}/>
      <Event/> */}
      {/* <Phone/> */}
      <Color/>
    </div>
  );
}

export default App;
