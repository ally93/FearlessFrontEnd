import AttendeesList  from "./AttendeesList";
import React from "react";
import Nav from "./Nav";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendConferenceForm from "./AttendConferenceForm";
import PresentationForm from "./PresentationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";




function App(props) {
  if(props.attendees === undefined){
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
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
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
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
