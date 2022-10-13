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
            option.value = conference.href;

            // Set the '.innerHTML' property of the option element to
            // the  name
            option.innerHTML = conference.name;

            // Append the option element as a child of the select tag
            selectTag.appendChild(option);
        }

        // Here, add the 'd-none' class to the loading icon
        const loadingIconTag = document.getElementById('loading-conference-spinner');
        loadingIconTag.classList.add("d-none");


        // Here, remove the 'd-none' class from the select tag
        selectTag.classList.remove("d-none");

      }
    } catch (e) {
        console.error('Got an error!');

        const newHTML = errorAlert();
        const somethingWrong = document.querySelector("#error");
        somethingWrong.innerHTML = newHTML;
    }
});