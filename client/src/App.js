import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Create from './components/Create';
import Detail from './components/Detail';
import Home from './components/Home';
import Landing from './components/Landing';
import s from './App.css'
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },2000)
  })

  return (
    <div className={s.App}>
      {loading ? <Loading/> :
      <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/dogs/:id'>
        <Detail/>
      </Route>
      <Route path='/dogs' >
        <Home />
      </Route>
      <Route path='/create' >
        <Create />
      </Route>
      </Switch>
      }
    </div>
  );
}

export default App;
