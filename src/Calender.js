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
        if (this.today !== null) {
            return (
                <div>
                    <div className="holiday-text" ><strong>Today Is Holiday</strong></div>

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
                $('#load').show();
        });
    }
    render() {
        this.divideDates();
        console.log(this.today);
        return (
            <div className="main-Conatier" onLoad={this.load()}>
                <Modals id="load"></Modals>
                {this.Information()}
                <button className="upcoming-holiday-btn" onClick={this.upcomingHoliday}>Upcoming Holidays</button>
                <button className="passed-holiday-btn" onClick={this.passedHoliday}>Passed Holidays</button>
                <div className="date-container scrollable" id="upcoming"><Dates dates={this.upcoming} /></div>
                <div className="date-container scrollable" id="passed"><Dates dates={this.passed} /></div>
            </div>
        )
    }
}
