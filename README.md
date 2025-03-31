# Space Exploration Full Stack Application

## Overview:

This full-stack web application is a mock-up space mission control dashboard to schedule and launch rocket trips to real exoplanets. I've build its own RESTful API and on top of that it also leverages the open-source SpaceX API to populate our upcoming and historical tabs with real SpaceX rocket launches. This application is a continuation of my Exoplanets Parser in Express which you can find here: https://github.com/TankEngine-ish/Exoplanets_Explorer 

**NOTE**: The front-end portion of this application is not built by me. I've only made very minor tweaks to its code.

The tools I've used are: Node + Express, MongoDB + Mongoose, nodemon, cors, axios, Morgan logger middleware, Jest, SuperTest library, Postman, dotenv package for secrets, Docker and AWS EC2. For more details refer to ./server/package.json.

## Live preview: 

https://majortomtogroundcontrol.duckdns.org/ 

**NOTE_2**: I have deployed this application via my Traefic Configuration https://github.com/TankEngine-ish/traefik_multi_app_hosting (apart from my AWS deployment earlier) with DuckDNS and Let's Encrypt.


**NOTE_3**: Make sure your port 8000 is freed up on your system. You can check if there's any processes using it by typing `sudo lsof -i :8000`. In case there is you can kill it by using `sudo kill -9 <PID>`. PID is the process identifier - it's a sequence of numbers.

## Usage

In case of the link above not working or if I have manually stopped it in case I get billed with a trillion dollars by AWS here's a short guide on how to get the website working on your machine.

* First install Docker on your machine and pull my Docker image from DockerHub - `docker pull tankengine/dead_space:latest`

* Then type `docker images` and run the container of my image with `docker run -p 8000:8000 -it <first_three_symbols_of_IMAGEID>`

* Go to `http://localhost:8000`

A high-level overview of my app's architecture (done in Figma).

![alt text](<Images/Screenshot from 2024-02-02 01-29-21.png>)


### Folder Structure:

```
└── 📁NASA_Project
    └── .dockerignore
    └── 📁.github
        └── 📁workflows
            └── node.yml
    └── .gitignore
    └── Dockerfile
    └── 📁Images
        └── 123123123131333.png
        └── 6397a190531a72626ba0be1b_1.png
        └── Screenshot from 2024-01-25 16-13-26.png
        └── Screenshot from 2024-01-27 15-31-13.png
        └── Screenshot from 2024-02-02 01-29-21.png
        └── Screenshot from 2024-02-21 17-52-50.png
        └── pagination.png
    └── README.md
    └── 📁client
        └── .gitignore
        └── README.md
        └── package-lock.json
        └── package.json
        └── 📁public
            └── favicon.png
            └── 📁img
                └── background-large.jpg
                └── background-medium.jpg
                └── background.jpg
                └── glow.png
            └── index.html
            └── manifest.json
            └── robots.txt
            └── 📁sound
                └── abort.mp3
                └── click.mp3
                └── deploy.mp3
                └── success.mp3
                └── typing.mp3
                └── warning.mp3
        └── 📁src
            └── App.js
            └── 📁components
                └── Centered.js
                └── Clickable.js
                └── Footer.js
                └── Header.js
            └── 📁hooks
                └── requests.js
                └── useLaunches.js
                └── usePlanets.js
            └── index.js
            └── 📁pages
                └── AppLayout.js
                └── History.js
                └── Launch.js
                └── Upcoming.js
            └── settings.js
    └── package-lock.json
    └── package.json
    └── 📁server
        └── .env
        └── .gitignore
        └── 📁data
            └── kepler_data.csv
        └── package-lock.json
        └── package.json
        └── 📁public
            └── asset-manifest.json
            └── favicon.png
            └── 📁img
                └── background-large.jpg
                └── background-medium.jpg
                └── background.jpg
                └── glow.png
            └── index.html
            └── manifest.json
            └── robots.txt
            └── 📁sound
                └── abort.mp3
                └── click.mp3
                └── deploy.mp3
                └── success.mp3
                └── typing.mp3
                └── warning.mp3
            └── 📁static
                └── 📁js
                    └── main.621e49c7.js
                    └── main.621e49c7.js.LICENSE.txt
                    └── main.621e49c7.js.map
        └── 📁src
            └── app.js
            └── 📁models
                └── launches.model.js
                └── launches.mongo.js
                └── planets.model.js
                └── planets.mongo.js
            └── 📁routes
                └── api.js
                └── 📁launches
                    └── launches.controller.js
                    └── launches.router.js
                    └── launches.test.js
                └── 📁planets
                    └── planets.controller.js
                    └── planets.router.js
            └── server.js
            └── 📁services

```



## Personal notes:

* It's worth noting the three different package.json files. One for the client-side, one for the backend and one at the root of the folder. The root json has scripts for running the server and the client + installing dependencies.

* There are different ports for the backend and front-end. We use an .env variable for that along with my connection string to my mongo database. For the purpose of separation of concerns server.js has no express code, it just sets-up the http server. 

* The CORS middleware is to allow access from PORT: 3000 which is our front-end.

* First time I had to delve deep into unit and component testing including the many different stages they can be crucially important.

![alt text](Images/6397a190531a72626ba0be1b_1.png)

* There's always a controller for a router. Planets' router calls functions in our planets controller. And our controller is only used by our router. We can have many models used by a single controller and a single model that is used in many different routes/controllers. We separate models because the data doesnt always match up with the collections, API endpoints and overall functionality that our API needs to support through our controllers and routes.

* I also got introduced to referential integrity when designing the schema and the difficulty of implementing an auto-increment feature the same way it's in a SQL database.

* It may be obvious but GET requests don't allow you to pass data in the body of the request. Instead, some API's use POST for search queries.

* I learned about ObjectId which are 12-byte identifier that MongoDB uses as the default value for the _id field in a document. It serves as a unique identifier for each document in a collection.
This ensures that each document has a unique identity within its collection and facilitates efficient querying and indexing.

* There's also the "__v" field which is often used by Mongoose. It stands for "version" and is used for document versioning.
You can see what I mean in this screenshot of a test query.

![alt text](<Images/Screenshot from 2024-01-25 16-13-26.png>)

* Where do we draw the line between the model and the controller? We dont want our controllers worrying about how the data in the model is stored. Ideally we want the controllers focusing on working with our request and response and our models can give us data access functions which control how the data in the model can be written to and read. 

* Pagination of data and the amount of work it saves for the server is immense. We add pagination when we want to avoid sending too much data from our API when less data is just enough. The SpaceX's API is paginated and I was experimenting with extracting specific pages from its data before I switched it off permanently as I needed to populate my server with every single one of their launches.


![alt text](Images/pagination.png)


* The Jest tests actually talk to my real-life database I set-up so they kind of resemble an end-to-end testing scenario.

* Rotating credentials is a method that is used when you or someone from your team accidentally leaks the secrets on the version control system for the public eye.

* I got introduced to versioning my API and how to do it properly. The below screenshot is from testing my v1 in Postman.

![alt text](<Images/Screenshot from 2024-01-27 15-31-13.png>)


* This was also my first workflow in GH Actions. In the below image you can see the successfull jobs that for two different versions of Node and MongoDB.

![alt text](<Images/Screenshot from 2024-02-21 17-52-50.png>)


* At the end I also deployed the app to an EC2 intance via a Docker image I created. I have also added a step to upload my work to the docker hub container registry.