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

---------------------------------------------------------------------------------------------------------------
REACT

- in terminal run 
docker run -it -w /app -v "$(pwd)/ghi:/app" node:latest npx create-react-app attendees

explaination for the terminal code above
"That is going to run the Docker image that has Node.js in it, the command-line JavaScript program. It's going to make the ghi directory the app directory inside the container. That's what the -v flag means. The -w flag sets the working directory for the container to use while it's running the command. The command that we're running is create-react-app, a tool used to make new React applications. Look in Visual Studio while this is happening," he prompts. "You can see inside the ghi directory that it has created an attendees directory inside there. If you expand that, you'll see all of the React stuff."

"In the src directory," he continues, "that's where the source code is that you write for the React application. In the public directory, that's where the index.html file is that will be used to show the React application after its turned into JavaScript."

-react is not js
-JSX = JavaScript Extended. Extension so tht u can write what looks like HTML in JS


-add the following code in yml file
react-attendees:
  image: node:latest
  command: npm start
  working_dir: /app
  volumes:
    - ./ghi/attendees:/app
  environment:
    - HOST=0.0.0.0
    - PORT=3001
  ports:
    - "3001:3001"

-This is creating a new service from the Node.js image, again. The 'command' is what it should run when it starts. The 'npm start' is how we run the React application during development. The next line sets the working directory, which is where we're going to attach the directory that has the React app in it.
-run docker-compose up
-The volumes is doing that directory attachment. Inside the container, the app directory will be looking at the attendees directory that was just created in the ghi directory."The environment section, that tells the React development Web server to bind to all ports and run on port 3001."

<!-- <img src={logo} className="App-logo" alt="logo" /> what is the slash at the end? -->
"That's a part of JSX. If you have an HTML tag that doesn't have a close tag, you have to put that slash there."

"In JavaScript, 'class' is a reserved word. You can't use it as a variable or anything. So, instead of using 'class', React uses 'className', because all of that JSX HTML-looking stuff gets turned into JavaScript."
It gets turned into JavaScript. Then, React uses things like document.createElement to make the HTML for you."

-COMPONENTS(the functions in React that return JSX)
"What happens," he explains, "is that when you have the attendees attribute on the App in the index.js," he points to the line <App attendees={data.attendees}/>, "that sets a variable named 'attendees' to the value inside the curly braces. Then, that variable becomes a property on the props parameter that gets passed into the function. He points to the line drawn between the "attendees" at the top of the drawing to the "props.attendees" inside the curly braces on the bottom. "That's how you end up passing arguments to the React functions. 

-dont use class, use className


-imp docker commands
docker container prune -f
docker-compose build
docker-compose up

----------------------------------------------------------------------------------------
in LocationForm.js
// we r creating a class here, which can have a state when its created. React takes care of creating the instance of that class for us. All react component classes needs a render method
// render returns the jsx 
<input xyz /> //look below for explaination
 In HTML, we can have tags that don't have close tags, like the input tag and the link tag. But, in React, everything has to have a close tag. Or, you put this slash at the end of it." You show your teammate to change the > at the end of all three input tags to />. With each forward slash they put near the end of the tag, the red squiggly error indicators go away.

-like u cant use class and have to use className instead, similarly 'for' is a reserved word in JavaScript, React elements use 'htmlFor' instead.

-can't use hooks with class components. We're doing a class component, so no hooks."

-"What's that event.target thing?" === "The event parameter is the event that occurred. The target property on it is the HTML tag that caused the event. So, in this case, the event.target is the input for the location's name. Then, the value property is the value in the input."


eg code :
        this.handleNameChange = this.handleNameChange.bind(this);

-In JavaScript, if you have an object and you refer to one of its methods like a property, JavaScript forgets what object it came from."
-if you want to use a method in the class as an event handler, you have to do that 'bind' thing in the constructor

... What's that triple dot thing?" you ask.

"That copies all of the properties and values from this.state into a new object. It's an easy way to make a copy of objects in JavaScript. Then, we're creating a new key named 'room_count' and setting it to the value of 'roomCount'. Then, we're deleting the keys 'roomCount' and 'states' because I'm guessing we don't want to send that data to the server. It's just JavaScript object manipulation."

-right click and format document to solve indent html issue 