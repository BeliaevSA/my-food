import { useState } from 'react';
import Eating from './components/Eating';
import './styles/App.css';
import { HeaderTitle } from './components/HeaderTitle'


function App() {
  const [isBreakfast, setValueBreakfast] = useState(localStorage.getItem('eating-breakfast'))
  const [isSnack, setValueSnack] = useState(localStorage.getItem('eating-snack'))
  const [isLunch, setValueLunch] = useState(localStorage.getItem('eating-lunch'))
  const [isSupper, setValueSupper] = useState(localStorage.getItem('eating-supper'))
  const [isAdding, setValueAdding] = useState(localStorage.getItem('eating-adding'))

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
  const changeValueAdding = (value = localStorage.getItem('eating-adding')) => {
    setValueAdding(value)
  }

  // console.log(isBreakfast)
  return ( 
    <div>
      <header className="header-container" >
        <div className="header">
          <HeaderTitle title='My Food' toName='app'/>
        </div>
      </header>
      <div className="App" name='app'>
        <Eating name='завтрак' value='breakfast' eatingState={isBreakfast} changeEatingState={changeValueBreakfast}/>
        <Eating name='перекус' value='snack' eatingState={isSnack} changeEatingState={changeValueSnack}/>
        <Eating name='обед' value='lunch' eatingState={isLunch} changeEatingState={changeValueLunch}/>
        <Eating name='ужин' value='supper' eatingState={isSupper} changeEatingState={changeValueSupper}/>
        <Eating name='дополнительное блюдо' value='adding' eatingState={isAdding} changeEatingState={changeValueSupper}/>
      </div>
    </div>
  );
}

export default App;
