import logo from './logo.svg';
import './App.css';
import Processors from './processors.js'
import Controllers from './Controllers'
import Sensors from './Sensors.js'
import Peripherals from './Peripherals.js'
import Heading from './heading';
import Background from './background.jpg'

function App() {
  return (
    <div className="App" >
      

      <div className="main">
      <Heading/>
      </div>
      <Processors/>
      <Controllers/>
      <Sensors/>
      <Peripherals/>
      <img src={Background} className="backgroud"></img>
      </div>
  );
}

export default App;
