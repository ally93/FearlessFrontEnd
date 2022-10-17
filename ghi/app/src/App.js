import AttendeesList  from "./AttendeesList";
import React from "react";
import Nav from "./Nav"



function App(props) {
  if(props.attendees === undefined){
    return null;
  }
  return (
    <React.Fragment>
    <Nav />
    <div className="container">
      <AttendeesList attendees={props.attendees}/>
    </div>
    </React.Fragment>
  );
}

export default App;
