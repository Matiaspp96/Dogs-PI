import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Landing from './components/Landing';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/dogs' >
        <NavBar/>
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
