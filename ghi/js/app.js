function createCard(name, description, pictureUrl, startDate, endDate, location) {
    return `
      <div class="card shadow mb-5 bg-body rounded">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${location}<h6>
          <p class="card-text">${description}</p>
        </div>
        <div class=card-footer>
            ${startDate} - ${endDate}
        </div>
      </div>
    `;
  }

function errorAlert () {
  return `
  <div class="alert alert-danger" role="alert">
  Oh no! You've got an error!
  </div>
  `
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        console.log('Bad response buddy!')
      } else {
        const data = await response.json();

        let index = 0;
  
        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const location = details.conference.location.name;
            const startDate = new Date(details.conference.starts).toLocaleDateString();
            const endDate = new Date(details.conference.starts).toLocaleDateString();
            const html = createCard(title, description, pictureUrl, startDate, endDate, location);
            const column = document.querySelector(`#col-${index % 3}`);
            column.innerHTML += html;
            index += 1;
          }
        }
      }
    } catch (e) {
        console.error('Got an error!');

        const newHTML = errorAlert();
        const somethingWrong = document.querySelector("#error");
        somethingWrong.innerHTML = newHTML;
    }
  
  });









  // window.addEventListener('DOMContentLoaded', async () => {
//     const url = 'http://localhost:8000/api/conferences/';
    
//     try{
//         const response = await fetch(url);

//         if(!response.ok){
//             console.log('Bad response buddy!');
//         } else{
//             const data = await response.json();

//             for(let conference of data.conferences){}

//             const conference = data.conferences[0];
//             const nameTag = document.querySelector('.card-title');
//             nameTag.innerHTML = conference.name;

            

//             const detailUrl = `http://localhost:8000${conference.href}`;
//             const detailResponse = await fetch(detailUrl);
//             if (detailResponse.ok) {
//                 const details = await detailResponse.json();
//                 const description = details.conference.description;
//                 const descriptionTag = document.querySelector('.card-text');
//                 descriptionTag.innerHTML = description
//                 // console.log('details:::', details);

//                 const imageTag = document.querySelector('.card-img-top');
//                 imageTag.src = details.conference.location.picture_url;
//             }

            
//         }
//     } catch (e) {
//         console.log('Got an error!');
//     }

// });