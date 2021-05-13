import React,{ Component } from 'react';
import './Processors.css'
import image1 from './NewProject.png';
class Processors extends Component{
    render(){
        return(
            <div className="square1">
                <h2>MicroProcessors</h2>
                <img src={image1} className="image1"/>
                <button className="button1">Explore</button>
            </div>
        );
    }
}
export default Processors;