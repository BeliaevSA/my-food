import { useSelector } from 'react-redux';
import Eating from './components/Eating';
import './styles/App.css';
import { HeaderTitle } from './components/HeaderTitle'



function App() {
  const showMenu = useSelector(state => state.showMenu)

  return ( 
    <div>
      <header className="header-container" >
        <div className="header">
          <HeaderTitle title='My Food' toName='app'/>
        </div>
      </header>
      <div className="App" name='app'>
        <Eating name='завтрак' value='breakfast' eatingState={showMenu.breakfast} />
        <Eating name='перекус' value='snack' eatingState={showMenu.snack} />
        <Eating name='обед' value='lunch' eatingState={showMenu.lunch} />
        <Eating name='ужин' value='supper' eatingState={showMenu.supper} />
        <Eating name='дополнительные рецепты' value='adding' eatingState={showMenu.adding} />
        <Eating name='все рецепты' value='all' eatingState={showMenu.all} />
        
      </div>
    </div>
  );
}

export default App;
