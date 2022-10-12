window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/locations/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        console.log("You're in a bad place!");
      } else {
        const data = await response.json();

        // Get the select tag element by its id 'location'
        const selectTag = document.getElementById('location');

        // For each location in the locations property of the data
        for (let location of data.locations) {

            // Create an 'option' element
            let option = document.createElement('option');

            // Set the '.value' property of the option element to the
            // state's abbreviation
            option.value = location.id;

            // Set the '.innerHTML' property of the option element to
            // the state's name
            option.innerHTML = location.name;

            // Append the option element as a child of the select tag
            selectTag.appendChild(option);
        }

      }
    } catch (e) {
        console.error('Got an error!');

        const newHTML = errorAlert();
        const somethingWrong = document.querySelector("#error");
        somethingWrong.innerHTML = newHTML;
    }

    // conferenceForm submit

    const formTag = document.getElementById('create-conference-form');
    formTag.addEventListener('submit',async event => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        
        const conferenceUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
        method: "post",
        body: json,
        headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newConference = await response.json();
            
        }
        
    });
  
});