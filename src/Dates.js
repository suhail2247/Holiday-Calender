import React, { Component } from 'react';
import './Dates.css';
export default class Dates extends Component {
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
    render() {
        this.date = [];
        this.j = 0;
        while (this.j < this.props.dates.length) {
            this.date.push(
                <div className="col-auto" key={this.j}>
                    <div className="date-boxes" >
                        <span className="date-content"><strong>{this.props.dates[this.j].date.datetime.day}</strong></span><br /><br />
                        <span className="text"><strong>{this.month(this.props.dates[this.j].date.datetime.month)}</strong></span>
                    </div>
                </div>

            )
            this.j++;
        }
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    {this.date}
                </div>
            </div>
        );
    }
}