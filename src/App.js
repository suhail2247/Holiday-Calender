import React,{Component} from 'react';
import Loader from './Loader';

async var apiCall=()=>{
  const url=`https://calendarific.com/api/v2/holidays?country=IN&year=${new Date().getFullYear}&api_key=1e28552dc96cf87e453acb1c71762590d0e6df89`;
  var x=await fetch(url);
  var y= await x.json();
  return(
    y
  );
}

class App extends Comonent{
render(){
  var z=apiCall();
  if(z.response == null){
    return <Loader loadContent="Error Loading Data"/>
  }
  else{
    return <Loader loadContent="Loading"/>
  }
}
}

export default App;
