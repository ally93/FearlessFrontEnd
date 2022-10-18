import React from 'react';

// we r creating a class here, which can have a state when its created. React takes care of creating the instance of that class for us. All react component class needs a render method
// render returns the jsx 
class ConferenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            name: '',
            starts: '',
            ends: '',
            description: '',
            maximumPresentation: '',
            maximumAttendees: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoomCountChange = this.handleRoomCountChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    async handleSubmit(event){
        event.preventDefault();
        //copying the state by utilizing 3 dots
        const data = {...this.state};
        data.room_count = data.roomCount;
        delete data.roomCount;
        delete data.states;
        console.log('dataaaaa: ', data);

        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newLocation = await response.json();
            console.log('newLocation:::', newLocation);

            const cleared = {
                name: '',
                roomCount: '',
                city: '',
                state: '',
            };
            this.setState(cleared);
            
        }
    }

    handleNameChange(event){
        this.setState({name : event.target.value})
      }

    handleRoomCountChange(event){
        this.setState({roomCount: event.target.value})
    }

    handleCityChange(event){
        this.setState({city: event.target.value})
    }

    handleStateChange(event){
        this.setState({state: event.target.value})
    }


    async componentDidMount() {
        const url = 'http://localhost:8000/api/states/';
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();
          this.setState({states: data.states});

        }
      }
    
      
  


    render() {
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        <a class="btn btn-primary" href="attend-conference.html">Attend!</a>
        </form> 

    }

}
export default LocationForm;







       