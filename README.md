# NASA_Project
Worth noting the three different package.json files.
One for the client-side, one for the backend and one at the root of the folder.

That way we can interact with npm commands from our project folder which in turn
perform actions on each one of our inner packages.

Different ports for the backend and front-end. We use env variable. 
server.js has no express code, just setting-up the http server. Again for the purpose of separation of concerns.

4 functions in the front-end - get planets, get launches, submit launches, abort launches (once API is ready)

setting CORS middleware to allow access from PORT: 3000 which is our front-end

There's always a controller for a router. a router that uses a controller.
Planets router calls functions in our planets controller. And our controller is only used by our router.

We can have many models used by a single controller and a single model that is used in many different routes/controllers. We separate models because the data doesnt always match up with the
collections, API endpoints and overall functionality that our API needs to support through our controllers and routes.

node/express, nodemon, cors, react

populating data on start-up.




