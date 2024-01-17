# NASA_Project

In this CRUD application

Personal notes:

* Worth noting the three different package.json files.
One for the client-side, one for the backend and one at the root of the folder.
The root json has scripts for running the server and the client + installing dependencies.

Different ports for the backend and front-end. We use env variable. 
For the purpose of separation of concerns server.js has no express code, it just sets-up the http server. 

4 functions in the front-end - get planets, get launches, submit launches, abort launches (once API is ready)

The CORS middleware to allow access from PORT: 3000 which is our front-end.

There's always a controller for a router. a router that uses a controller.
Planets router calls functions in our planets controller. And our controller is only used by our router.

We can have many models used by a single controller and a single model that is used in many different routes/controllers. We separate models because the data doesnt always match up with the collections, API endpoints and overall functionality that our API needs to support through our controllers and routes.

Tools I've used: node/express, nodemon, cors, react, morgan logger middleware

model and controller where do we draw the line?

We dont want our controllers worrying about how the data in the model from the MVC pattern is stored.
Ideally we want the controllers focusing on working with our request and response and our models can give us data access functions which control how the data in the model can be written to and read.

Our model only really works directly with the data. Our controller only ever uses functions to work with the data model in order to put it all together into a useful response to our front-end client.










