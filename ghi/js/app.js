window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';
    
    try{
        const response = await fetch(url);

        if(!response.ok){
            console.log('Bad response buddy!');
        } else{
            const data = await response.json();

            const conference = data.conferences[0];
            const nameTag = document.querySelector('.card-title');
            nameTag.innerHTML = conference.name;

            

            const detailUrl = `http://localhost:8000${conference.href}`;
            const detailResponse = await fetch(detailUrl);
            if (detailResponse.ok) {
                const details = await detailResponse.json();
                const description = details.conference.description;
                const descriptionTag = document.querySelector('.card-text');
                descriptionTag.innerHTML = description
                console.log('details:::', details);

                const imageTag = document.querySelector('.card-img-top');
                imageTag.src = details.conference.location.picture_url;
            }

            
        }
    } catch (e) {
        console.log('Got an error!');
    }

});
