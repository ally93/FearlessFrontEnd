import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AttendConferenceForm from './AttendConferenceForm';
import ConferenceForm from './ConferenceForm';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import Nav from './Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

async function loadAttendees() {
  const response = await fetch('http://localhost:8001/api/attendees/');
  if(response.ok){
    // code gets the data from the responses json method
    const data = await response.json();

    root.render(
      <React.StrictMode>
        <App attendees={data.attendees} />
      </React.StrictMode>
    );

  } else {
    console.error(response);
  }
}
loadAttendees();
