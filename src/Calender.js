import React, { Component } from 'react';
import Dates from './Dates';
import "./Calender.css";
import $ from 'jquery';
import Modals from './Modals';
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
    month(e) {
        switch (e) {
            case 1:
                return "January"
            case 2:
                return "February"
            case 3:
                return "March"
            case 4:
                return "April"
            case 5:
                return "May"
            case 6:
                return "June"
            case 7:
                return "July"
            case 8:
                return "August"
            case 9:
                return "September"
            case 10:
                return "October"
            case 11:
                return "November"
            case 12:
                return "December"
            default:
                break;
        }
    }

    divideDates = () => {
        this.data = [this.props.holiday.holidays];
        var day = new Date().getDate();
        var mon = new Date().getMonth() + 1;
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
        this.date = this.upcoming;
    }

    upcomingHoliday = () => {
        this.setState({ new: true, pass: false });
        $('#upcoming').show();
        $('#passed').hide();

        this.setState({ new: true, pass: false });
    }
    passedHoliday = () => {
        this.setState({ new: false, pass: true });
        $('#upcoming').hide();
        $('#passed').show();
    }
    componentDidMount = () => {
        if (this.state.new === true) {
            $('#upcoming').show();
            $('#passed').hide();
        }
        else {
            $('#upcoming').hide();
            $('#passed').show();
        }
    }
    Information = () => {
        this.eve = []
        if (this.today !== null) {
            console.log(this.today)
            console.log(this.today.length)
            for (var i = 0; i < this.today.length; i++) {
                this.eve.push(
                    <div className="holiday-text">
                        <strong className="date-content">{this.today[i].date.datetime.day} {this.month(this.today[i].date.datetime.month)} {this.today[i].date.datetime.year}</strong>
                        <div>{this.today[i].name}</div>
                        <div>{this.today[i].type[0]}</div>
                    </div>
                )
            }
            return (
                <div>
                    <div className="holiday-text" >
                        <strong>Hey, you got holiday today</strong>
                        {this.eve}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="holiday-text" ><strong>No holiday</strong></div>
            )
        }
    }
    load = () => {
        $(document).ready(function () {
            if (this.today !== null)
                $('#load').hide();
        });
        //<div id="load" ><Modals /></div>
    }
    render() {
        this.divideDates();
        console.log(this.today);
        return (
            <div className="main-Conatier">

                {this.Information()}
                <button className="upcoming-holiday-btn" onClick={this.upcomingHoliday}>Upcoming Holidays</button>
                <button className="passed-holiday-btn" onClick={this.passedHoliday}>Passed Holidays</button>
                <div className="date-container scrollable" id="upcoming"><Dates dates={this.upcoming} /></div>
                <div className="date-container scrollable" id="passed"><Dates dates={this.passed} /></div>
            </div>
        )
    }
}
