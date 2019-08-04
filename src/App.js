import React, { Component } from 'react';
import Loader from './Loader';
import Calender from './Calender';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
      data: [],
      err: false
    }
  }
  async componentDidMount() {
    var x = await fetch("https://calendarific.com/api/v2/holidays?country=IN&year=2019&api_key=1e28552dc96cf87e453acb1c71762590d0e6df89")
    var j = await x.json();
    if (j["response"]["holidays"] == null) {
      this.setState({
        Loading: false,
        data: [],
        err: true
      })
      console.log("data not retreve Succesfully");
    }
    else {
      this.setState({
        Loading: false,
        data: j.response,
        err: false
      })
      console.log("data retreve Succesfully");

    }
  }
  render() {
    if (this.state.Loading === true && this.state.err === false)
      return <Loader loadContent="Loading" />
    else if (this.state.err === true && this.state.Loading === false)
      return <Loader loadContent="Error In fetching data" />
    else
      return <div><Calender holiday={this.state.data} /></div>
  }
}

export default App;
