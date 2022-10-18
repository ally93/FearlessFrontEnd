import AttendeesList  from "./AttendeesList";
import React from "react";
import Nav from "./Nav";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";



function App(props) {
  if(props.attendees === undefined){
    return null;
  }
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <ConferenceForm />
        {/* <LocationForm /> */}
        {/* <AttendeesList attendees={props.attendees}/> */}
      </div>
  </React.Fragment>
  );
}

export default App;
