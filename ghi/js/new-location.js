window.addEventListener('DOMContentLoaded', async () => {

    const stateUrl = 'http://localhost:8000/api/states/';
  
    try {
      const response = await fetch(stateUrl);
  
      if (!response.ok) {
        console.log("You're in a bad state!");
      } else {
        const data = await response.json();

        // Get the select tag element by its id 'state'
        const selectTag = document.getElementById('state');

        // For each state in the states property of the data
        for (let state of data.states) {

            // Create an 'option' element
            let option = document.createElement('option');

            // Set the '.value' property of the option element to the
            // state's abbreviation
            option.value = state.abbreviation;

            // Set the '.innerHTML' property of the option element to
            // the state's name
            option.innerHTML = state.name;

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
  
  });