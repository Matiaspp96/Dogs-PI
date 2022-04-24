import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import AllDogs from './components/AllDogs';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Route path='/' ><NavBar /></Route>
      <Switch>
      <Route path='/dogs' >
        <AllDogs />
      </Route>
      <Route path='/create' >
        <Create />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
