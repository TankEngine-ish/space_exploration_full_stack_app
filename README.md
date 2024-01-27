# Space Exploration Full Stack Application

## Overview:

This full-stack CRUD application is a 

The tools I've used are: Node/Express, MongoDB + Mongoose, nodemon, cors, React, Morgan logger middleware, Jest, SuperTest library, Postman.

This application is a continuation of my Exoplanets Parser in Express which you can find here: https://github.com/TankEngine-ish/Exoplanets_Explorer 

The API of this application also talks with SpaceX's API to populate the list of historical rocket launches.



## Personal notes:

* It's worth noting the three different package.json files. One for the client-side, one for the backend and one at the root of the folder. The root json has scripts for running the server and the client + installing dependencies.

* There are different ports for the backend and front-end. We use env variable. For the purpose of separation of concerns server.js has no express code, it just sets-up the http server. 

* We've got 4 main functions on the front-end - get planets, get launches, submit launches, abort launches (once API is ready)

* The CORS middleware to allow access from PORT: 3000 which is our front-end.

* There's always a controller for a router. Planets router calls functions in our planets controller. And our controller is only used by our router. We can have many models used by a single controller and a single model that is used in many different routes/controllers. We separate models because the data doesnt always match up with the collections, API endpoints and overall functionality that our API needs to support through our controllers and routes.

* I also got introduced to referential integrity when designing the schema and the difficulty of implementing an auto-increment feature the same way it's in a SQL database.

* Where do we draw the line between the model and the controller? We dont want our controllers worrying about how the data in the model from the MVC pattern is stored. Ideally we want the controllers focusing on working with our request and response and our models can give us data access functions which control how the data in the model can be written to and read. Our model only really works directly with the data. Our controller only ever uses functions to work with the data model in order to put it all together into a useful response to our front-end client.

* The Jest tests actually talk to my real-life mongoDB I set-up so they kind of resemble an end-to-end testing scenario.

* ObjectIDs showing in Postman. We can use the ObjectId to check the creation date of the object among other things.
The "__v": 0 are the version keys to keep track of the document.

[screenshot]









