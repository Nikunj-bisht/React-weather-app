import React,{useState} from 'react';


import './App.css';
import Weathercard from './components/Weathercardfolder/Weathercard';

function App() {

const [city,setCity] = useState("Sydney");  // hooks setcity is afunction which sets the new value when we render
const [temp,setTemp] = useState(""); 
const [condition,setCondition] = useState(""); 

const data  = async()=>{

const datares = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f28ea865112fd13bb2a4abc7407a27d8`)

const resJSON =await datares.json();

return resJSON;
}

function buttonclicked(e){
e.preventDefault();
 data().then(rawjsonn=>{          // function to fetch data
  console.log(rawjsonn);

  // Now set values for all the hooks
setTemp(rawjsonn.main.temp);
    setCondition(rawjsonn.weather[0].main);
 });;
}


  return (
    <div className="App">
<Weathercard temp={temp} cond={condition}/>
<form>

<input value={city} onChange={(e)=>{
  setCity(e.target.value)
}} ></input>
<button onClick={(e)=>{
buttonclicked(e);


}}>Search</button>
<h1>{temp}</h1>
</form>
    </div>
  );
}

export default App;

 // api.openweathermap.org/data/2.5/weather?q=Delhi&appid=f28ea865112fd13bb2a4abc7407a27d8