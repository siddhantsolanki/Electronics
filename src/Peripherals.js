import React,{ Component } from 'react';
import './Tiles.css';
import image4 from './New Project 3.png';
class Peripherals extends Component {
    render(){
        return(
            <div className="square4">
                <h2>Peripherals</h2>
                <img src={image4} alt="img3" className="image4"/>
                <button className="button4">Explore</button>
            </div>
        );
    }
}
export default Peripherals;