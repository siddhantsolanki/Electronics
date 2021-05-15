import React,{ Component } from 'react';
import './Tiles.css'
import image3 from './New Project 2.png';
class Sensors extends Component{
    render(){
        return(
            <div className="square3">
                <h2>Sensors</h2>
                <img src={image3} alt="image3" className="image3"/>
                <button className="button3">Explore</button>
            </div>
        );
    }
}
export default Sensors;