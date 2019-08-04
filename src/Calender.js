import React, { Component } from 'react';
import Dates from './Dates';
import "./Calender.css";
import $ from 'jquery';
export default class Calender extends Component {
    constructor() {
        super();
        this.upcoming = [];
        this.passed = [];
        this.today = [];
        this.data = [];
        this.date = [];
        this.state = {
            new: true,
            pass: false
        };
    }

    divideDates = () => {
        this.data = [this.props.holiday.holidays];
        console.log(this.data);
        console.log(this.data[0].length);
        var day = new Date().getDate();
        var mon = new Date().getMonth() + 1;
        console.log(day);
        console.log(mon);
        for (var i = 0; i < this.data[0].length; i++) {

            if (this.data[0][i]["date"]["datetime"]["month"] === mon && this.data[0][i]["date"]["datetime"]["day"] < day) {
                this.passed.push(this.data[0][i]);
            }
            else if (this.data[0][i]["date"]["datetime"]["month"] < mon) {
                this.passed.push(this.data[0][i]);
            }
            else if (this.data[0][i]["date"]["datetime"]["month"] === mon && this.data[0][i]["date"]["datetime"]["day"] > day) {
                this.upcoming.push(this.data[0][i]);
            }
            else if (this.data[0][i]["date"]["datetime"]["month"] > mon) {
                this.upcoming.push(this.data[0][i]);
            }
            else {
                this.today.push(this.data[0][i]);
            }
        }
        console.log(this.upcoming.length);
        console.log(this.passed.length);
        console.log(this.today.length);
        this.date = this.upcoming;
    }

    upcomingHoliday = () => {
        this.setState({ new: true, pass: false });
        $('#upcoming').show();
        $('#upcoming').empty();
        $('#passed').hide();

        this.setState({ new: true, pass: false });
    }
    passedHoliday = () => {
        this.setState({ new: false, pass: true });
        $('#upcoming').hide();
        $('#passed').show();
    }
    render() {
        this.divideDates();
        return (
            <div className="main-Conatier" >
                <div className="holiday-text" ><strong>No holiday</strong></div>
                <button className="upcoming-holiday-btn" onClick={this.upcomingHoliday}>Upcoming Holidays</button>
                <button className="passed-holiday-btn" onClick={this.passedHoliday}>Passed Holidays</button>
                <div className="date-container scrollable" id="upcoming"><Dates dates={this.upcoming} /></div>
                <div className="date-container scrollable" id="passed"><Dates dates={this.passed} /></div>
            </div>
        )
    }
}
