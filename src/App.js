import headerImage from './assets/Saly-13.png';
// import './App.css';
import {Theme} from './components/util/Theme'
import Navbar from './components/navigation/navbar';
import Header from './components/HomeSection/Header';
function App() {
  return (
    <div className="App">
        <div className="container">
        <Navbar/>
        
        <Header/>
        </div>

    </div>
  );
}

export default App;
