-in ghi/js/app.js get the response
-await needs async in the function

-You can use a CSS query selector to get a reference to that tag. Then, you set the innerHTML property of the element to set the name of the conference to the content of that element.
    const nameTag = document.querySelector('.card-title');

-detailResponse.json(); => takes json and makes it into js object;

-What you never want to do for an API is remove a property, or change the shape of the data. Adding properties is usually not a big deal. It'll just add to our bandwidth cost. But, a URL shouldn't be that big of a deal."


-------------------------------------------------------------------------------------------------
making a new data, made a new html and new js to contain new data

-It's almost always okay to have an API URL to get Value Objects. Just make sure that you only return its property values. Don't send back ids or hrefs." which means u can't use model encoders coz that will return href, and we dont need it. do a good old for loop

-if u put active in the class, u make it black/bolder/standout to show what page you're in has to be a part of navbar
<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="new-location.html">New Location</a>
</li>



---------------------------------------------------------------------------------------------------------------------------------------
CORS

-malik=> Oh, I know what it is. 'CORS' stands for 'cross-origin resource sharing'. This happens because your Web page that is on localhost:3000 is making a request to localhost:8001. When that happens, the browser asks the server at localhost:8001 if it's okay to make that HTTP request. The server responds with information in the HTTP response headers about if it's okay." He leans forward and points to the error on your screen. "Here, it says there's no 'Access-Control-Allow-Origin' header on the response. Is this microservice you're using configured for CORS?"

-add cors in the requirements.txt on microservices


-DJWTO notes 
-login requires normal form data, not json
-The djwto does not do JSON POST requests.