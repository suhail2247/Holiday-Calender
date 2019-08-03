import React,{Component} from 'react';
import './Dates.css';
export default class Dates extends Component{
    render(){
        return(
            <div className="date-boxes">
                <span className="date-content"><strong>Date</strong></span><br/><br/>
                <span className="date-content"><strong>month</strong></span>            
            </div>
        );
    }
}