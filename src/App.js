import { useState } from 'react';
import Eating from './components/Eating';
import './styles/App.css';
import './styles/recipes.css';


function App() {
  const [isBreakfast, setValueBreakfast] = useState(localStorage.getItem('eating-breakfast'))
  const [isSnack, setValueSnack] = useState(localStorage.getItem('eating-snack'))
  const [isLunch, setValueLunch] = useState(localStorage.getItem('eating-lunch'))
  const [isSupper, setValueSupper] = useState(localStorage.getItem('eating-supper'))

  const changeValueBreakfast = (value = localStorage.getItem('eating-breakfast')) => {
    setValueBreakfast(value)
  }
  const changeValueSnack = (value = localStorage.getItem('eating-snack')) => {
    setValueSnack(value)
  }
  const changeValueLunch = (value = localStorage.getItem('eating-lunch')) => {
    setValueLunch(value)
  }
  const changeValueSupper = (value = localStorage.getItem('eating-supper')) => {
    setValueSupper(value)
  }

  // console.log(isBreakfast)
  return (
    <div className="App">
      
      <Eating name='завтрак' value='breakfast' eatingState={isBreakfast} changeEatingState={changeValueBreakfast}/>
      <Eating name='перекус' value='snack' eatingState={isSnack} changeEatingState={changeValueSnack}/>
      <Eating name='обед' value='lunch' eatingState={isLunch} changeEatingState={changeValueLunch}/>
      <Eating name='ужин' value='supper' eatingState={isSupper} changeEatingState={changeValueSupper}/>
    </div>
  );
}

export default App;
