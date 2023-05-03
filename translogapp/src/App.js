import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import Contact from './components/pages/Contact'
import Counteiner from './components/layout/Counteiner'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>

      <Navbar/>
      

      <Switch>

        <Counteiner customClass= "min-height">
          
          <Route exact path = "/">
            <Home/>
          </Route>

          <Route exact path = "/cadastro">
            <Cadastro/>
          </Route>

          <Route exact path = "/contact">
            <Contact/>
          </Route>

        </Counteiner>
        
      </Switch>

      <Footer/>
  
    </Router>
  
  );
}

export default App;
