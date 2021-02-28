import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <div className = "main-nav"> 
        <Link to = '/' className = 'nav-style'>
            <h1>Bla Bla Store</h1>
        </Link>

        <ul className = "nav-links">

            <Link to = "/about" className = 'nav-style'>
                <li>About</li>
            </Link>

            <Link to = "/cart" className = 'nav-style'>
                <li>Cart</li>
            </Link>
                
          </ul>
      </div>
    );
  }
  
  export default Nav;
  