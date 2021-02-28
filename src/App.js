import './App.css';
import About from "./Components/Pages/About/About"
import Cart from "./Components/Pages/Cart/Cart"
import Nav from "./Components/Pages/Navigation/Nav"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/about" component = {About} /> 
          </Switch>

      </div>
    </Router>
    
  );
}

export default App;
