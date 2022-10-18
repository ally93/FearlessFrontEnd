import AttendeesList  from "./AttendeesList";
import React from "react";
import Nav from "./Nav";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendConferenceForm from "./AttendConferenceForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(props) {
  if(props.attendees === undefined){
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="attendees">
            <Route path="" element={<AttendeesList />} />
            <Route path="new" element={<AttendConferenceForm />} />
          </Route>
        </Routes>
      {/* <AttendConferenceForm /> */}
        {/* <ConferenceForm /> */}
        {/* <LocationForm /> */}
        {/* <AttendeesList attendees={props.attendees}/> */}
      </div>
  </BrowserRouter>
  );
}

export default App;
