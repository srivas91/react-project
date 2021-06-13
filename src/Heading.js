import { BrowserRouter, Link,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import './Heading.css';
function Heading(){
    return (
      <BrowserRouter>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/services">Services Offered</Link></li>
      </ul>
        <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Services}></Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Heading;

