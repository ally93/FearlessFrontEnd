-in ghi/js/app.js get the response
-await needs async in the function

-You can use a CSS query selector to get a reference to that tag. Then, you set the innerHTML property of the element to set the name of the conference to the content of that element.
    const nameTag = document.querySelector('.card-title');

-detailResponse.json(); => takes json and makes it into js object;

-What you never want to do for an API is remove a property, or change the shape of the data. Adding properties is usually not a big deal. It'll just add to our bandwidth cost. But, a URL shouldn't be that big of a deal."


-------------------------------------------------------------------------------------------------
making a new data, made a new html and new js to contain new data

-It's almost always okay to have an API URL to get Value Objects. Just make sure that you only return its property values. Don't send back ids or hrefs." which means u can't use model encoders coz that will return href, and we dont need it. do a good old for loop

-