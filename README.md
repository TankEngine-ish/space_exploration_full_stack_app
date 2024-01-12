# NASA_Project
Worth noting the three different package.json files.
One for the client-side, one for the backend and one at the root of the folder.

That way we can interact with npm commands from our project folder which in turn
perform actions on each one of our inner packages.

Different ports for the backend and front-end. We use env variable. 
server.js has no express code, just setting-up the http server. Again for the purpose of separation of concerns.

4 functions in the front-end - get planets, get launches, submit launches, abort launches (once API is ready)
