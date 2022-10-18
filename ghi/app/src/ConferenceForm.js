import React from 'react';

// we r creating a class here, which can have a state when its created. React takes care of creating the instance of that class for us. All react component class needs a render method
// render returns the jsx 
class ConferenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            name: '',
            starts: '',
            ends: '',
            description: '',
            maximumPresentations: '',
            maximumAttendees: '',
            location:''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartsChange = this.handleStartsChange.bind(this);
        this.handleEndsChange = this.handleEndsChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleMaxPresentationsChange = this.handleMaxPresentationsChange.bind(this);
        this.handleMaxAttendeesChange = this.handleMaxAttendeesChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    async handleSubmit(event){
        event.preventDefault();
        //copying the state by utilizing 3 dots
        const data = {...this.state};
        data.max_presentations = data.maximumPresentations;
        data.max_attendees = data.maximumAttendees;
        delete data.maximumPresentations;
        delete data.maximumAttendees;
        delete data.locations;
        console.log('dataaaaa: ', data);

        const locationUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newConference = await response.json();
            console.log('newConference:::', newConference);

            const cleared = {
                name: '',
                starts: '',
                ends: '',
                description: '',
                maximumPresentations: '',
                maximumAttendees: '',
                location:''
            };
            this.setState(cleared);
            
        }
    }

    handleNameChange(event){
        this.setState({name : event.target.value})
      }

    handleStartsChange(event){
        this.setState({starts: event.target.value})
    }

    handleEndsChange(event){
        this.setState({ends: event.target.value})
    }

    handleDescriptionChange(event){
        this.setState({description: event.target.value})
    }

    handleMaxPresentationsChange(event){
        this.setState({maximumPresentations: event.target.value})
    }

    handleMaxAttendeesChange(event){
        this.setState({maximumAttendees: event.target.value})
    }

    handleLocationChange(event){
        this.setState({location: event.target.value})
    }


    async componentDidMount() {
        const url = 'http://localhost:8000/api/locations/';
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();
          this.setState({locations: data.locations});

        }
      }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit} id="create-conference-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleStartsChange} value={this.state.starts} required type="date" name="starts" id="starts" className="form-control"/>
                    <label htmlFor="starts">Starts</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEndsChange} value={this.state.ends} required type="date" name="ends" id="ends" className="form-control"/>
                    <label htmlFor="ends">Ends</label>
                </div>
                <div className="mb-3">
                    <textarea onChange={this.handleDescriptionChange} value={this.state.description} placeholder="Description" required name="description" id="description" className="form-control"></textarea>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleMaxPresentationsChange} value={this.state.maximumPresentations} placeholder="Max presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control"/>
                    <label htmlFor="max_presentations">Max presentations</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleMaxAttendeesChange} value={this.state.maximumAttendees} placeholder="Max attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control"/>
                    <label htmlFor="max_attendees">Max attendees</label>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleLocationChange} value={this.state.location} required id="location" name="location" className="form-select">
                        <option value="">Choose a location</option>
                        {this.state.locations.map(location => {
                            return (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        );
    }

}
export default ConferenceForm;







       