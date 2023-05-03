import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <ul>
        <li> Home</li>
        <li> Contato</li>
      </ul>

      <Switch>
        <Route path = "/">
        <Home/>
        
        </Route>
      </Switch>
  
    <Router>
  
  );
}

export default App;
