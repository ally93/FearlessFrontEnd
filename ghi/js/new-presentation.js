window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        console.log("You're in a bad conference!");
      } else {
        const data = await response.json();

        // Get the select tag element by its id 'conference'
        const selectTag = document.getElementById('conference');

        // For each conference in the conferences property of the data
        for (let conference of data.conferences) {

            // Create an 'option' element
            let option = document.createElement('option');

            // Set the '.value' property of the option element to the id
            option.value = conference.id;

            // Set the '.innerHTML' property of the option element to
            // the  name
            option.innerHTML = conference.name;

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

    const formTag = document.getElementById('create-presentation-form');
    formTag.addEventListener('submit',async event => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const data = Object.fromEntries(formData);
        const json = JSON.stringify(data);
        console.log('json::: ', json);
        console.log('data:', data, '  formData:  ', formData);
        
        const presentationUrl = 'http://localhost:8000/api/conferences/' + data.conference + '/presentations/';
        const fetchConfig = {
        method: "post",
        body: json,
        headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(presentationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newPresentation = await response.json();
            
        }
        
    });
  
});