import React,{ Component } from 'react';
import './Processors.css'
import image1 from './NewProject.png';
class Processors extends Component{
    render(){
        return(
            <div className="square">
                <h2>MicroProcessors</h2>
                <img src={image1} className="image1"/>
            </div>
        );
    }
}
export default Processors;