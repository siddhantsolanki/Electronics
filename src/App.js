import logo from './logo.svg';
import './App.css';
import Processors from './processors.js'
import Controllers from './Controllers'
import Sensors from './Sensors.js'
import Peripherals from './Peripherals.js'
import Heading from './heading';


function App() {
  return (
    <div className="App">
      
      <div className="main">
      <Heading/>
      </div>
      <Processors/>
      <Controllers/>
      <Sensors/>
      <Peripherals/>
    
      </div>
  );
}

export default App;
