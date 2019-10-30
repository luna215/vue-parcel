var express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { schema } = require('./schema');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fetch = require('node-fetch');
var app = express();

const query = `mutation {
	save (user:{
    userId:3,
    userStatus:"Active",
    userType:"Developer",
  	firstName:"paul",
    lastName: "luna",
    emailAddress: "pluna@dealercontrol.com",
    password:"abcd1234"
  }) {
		userId
    userStatus
    userType
    firstName
    lastName
    emailAddress
    password
    createdOn
    createdBy
  }
}`;

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', async (req, res) => {
   fetch('http://localhost:3000/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-app-token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbl9pZCI6MSwiYXBwbGljYXRpb25fbmFtZSI6IkRlYWxlciBDb250cm9sIiwic2NvcGVzIjoiYWNjb3VudHMsYXBwbGljYXRpb25zLGZlZWRzLGxlYWRzLHVzZXJzLHZlaGljbGVzLHdlYnNpdGVzIiwiaWF0IjoxNTcwMjEzOTYxLCJleHAiOjE1NzI4MDU5NjEsImF1ZCI6IkRlYWxlciBDb250cm9sIiwiaXNzIjoiYXBvbGxvMiIsInN1YiI6IkRlYWxlciBDb250cm9sIn0.m5gQdyp1vFidKcBvoGmx1dobxkmLlkeVe_kDHlI2FpOQCY3K9TKKUY9YfLeuPL6r9N6j6jOzCqKybnF0lJxYKg',
              },
              body: JSON.stringify({
                query
              })
            })
            .then(r => r.json())
            .then(data => console.log('data return', data));  
});


const server = new ApolloServer({ 
  schema,
  introspection: true,
});
server.applyMiddleware({ app });

module.exports = app;
