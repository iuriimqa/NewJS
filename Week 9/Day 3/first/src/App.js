import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import SubHello from './SubHello';
import USer from './components/User';

const arr =[
  {id:1,name:"John",email:'jjj@gmail.com'},
  {id:2,name:"Marry",email:'mm@gmail.jk'},
  {id:3,name:"Anne",email:'aaaa@jklj.jkl'},
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        arr.map((item,indx) =>{
          return (
            <USer userinfo={item} key={indx}/>
          )
        }

        )
       }
       
      </header>
    </div>
  );
}

export default App;
