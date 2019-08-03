import React,{Component} from 'react';
import Dates from './Dates';
import "./Calender.css";
export default class Calender extends Component{
    upcoming=[];
    passed=[];

    divideDates=(pass)=>{
        var day=new Date().getDate();
        var mon=new Date().getMonth()+1;
        for(var i=0;i<pass.length;i++){
            if(pass[i].date.datetime.month<mon && pass[i].date.datetime.day<day){
                this.passed.push(pass[i]);
            }
            else if(pass[i].date.datetime.month>mon && pass[i].date.datetime.day>day){
                this.upcoming.push(pass[i]);
            }
            // else if(pass[i].date.datetime.month===mon && pass[i].date.datetime.day===day){
            // }
    }
}
    render(){
        this.divideDates(this.props.holiday);
        return(
            <div className="main-Conatier">
                <div className="holiday-text" onbeforeprint={}><strong>No holiday</strong></div>
                <button className="upcoming-holiday-btn" onClick={this.UpcomingHoliday} onbeforeprint={}>Upcoming Holidays</button>
                <button className="passed-holiday-btn" onClick={this.PassedHoliday}>Passed Holidays</button>
                <div className="date-container"><Dates/></div>
            </div>
        )
    }
}
