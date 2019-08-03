import React,{Component} from 'react';
import "./Calender.css";
export default class Calender extends Component{
    render(){
        return(
            <div className="main-Conatier">
                <div className="holiday-text"><strong>No holiday</strong></div>
                <button className="upcoming-holiday-btn">Upcoming Holidays</button>
                <button className="passed-holiday-btn">Passed Holidays</button>
                <div className="date-container"></div>
            </div>
        )
    }
}
