
import './App.css';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Component/Routing';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
 <Router basename="/Task23">
   <NavBar/>
 <Routing/>
 <Footer/>
 </Router>
    </div>
  );
}

export default App;
