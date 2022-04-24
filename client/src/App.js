import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Route path='/' ><NavBar /></Route>
      <Switch>
      <Route path='/dogs' >
        <Home />
      </Route>
      <Route path='/create' >
        <Create />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
