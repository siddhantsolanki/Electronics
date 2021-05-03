import React,{ Component } from 'react';
import './Processors.css';
import image2 from './New Project 1.png'

class Controllers extends Component{
    render(){
        return(
            <div className="square2">
                <h2>MicroControllers</h2>
                <img src={image2} alt="image2" className="image2"></img>
            </div>
        );
    }
}
export default Controllers;