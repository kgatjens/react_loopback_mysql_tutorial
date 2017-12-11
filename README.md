# React + Loopback + Mysql example

This is a very basic CRUD example using React as a client, LB(LoopBack) as the API generator, and MySql(DB).

Was created using the [Traversy Media Youtube Course](https://www.youtube.com/watch?v=Mx-cywTNy8s)

The CRUD manage a "Meetups" table structure, and use [Materialize](http://materializecss.com/) 

###Running the API

The project is generated by [LoopBack](http://loopback.io) and modified by me(Kenneth Brenes).

First:

> `npm install`

To use the DB, you just need to import the `db_dump.sql` file inside the db folder in the root. In that dump, a "Meetups" table with a basic structure for the LoopBack consuming.

Install the MySql datasource:

> `npm install loopback-connector-mysql --save`

(Here the DB credentials in: server/datasources.json
)

To run the LB API, just run:

> `node .`

After this, if you go to: http://localhost:3000/explorer/ you should be able to see something like: 



###Running the Client

Go inside the `client folder`

Run:

> `npm install`
> `npm install —save react-router react-router-dom`
> `npm install axios —save`
> `npm start`

No, if you go to: http://localhost:3001/ you should be able to see something like:




