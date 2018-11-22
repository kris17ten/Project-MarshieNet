//Import the express and url modules
  var express = require('express');
  var session = require('express-session');
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');
  var http = require('http').Server(app);

//Import the mysql module
  var mysql = require('mysql');

//The express module is a function. When it is executed it returns an app object
  var app = express();


app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  cookieName: 'session',
  secret: 'krisney',
  resave: false,
  saveUninitialized: true,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true
}));

app.get('/check', function (req, res) {
  //Create a connection object with the user details
    var con = mysql.createConnection({
      host: "localhost",
      user: "krys17",
      password: "Kristen",
      database: "marshienet"
    });
  //Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors

      //Output results
        console.log("Connected!");
      }
  );
    if (req.session && req.session.user) {
      var username = req.session.user;
      console.log(req.session);
      //Build SQL query
        var sql = "SELECT * FROM users WHERE Username='" + username + "'";
    
      //Execute the query
        con.query(sql, function (err, result) {

        //Check for errors
          if (err) throw err;
            console.log("session running...");
            var marshieCheck = result;
            marshieCheck.unshift("/check");
            console.log(marshieCheck);
            res.send(JSON.stringify(marshieCheck));
      
        });
    }
    else {
      console.log("session undefined...");
      res.send("undefined");
    }
    con.end();
});


app.get('/profile', function (req, res) {
//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });
//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors

      //Output results
        console.log("Connected!");
      }
  );
    
//assign marshie details
  var username = req.session.user;
  
  //SELECT * FROM users WHERE Username='test';
  //SELECT * FROM posts WHERE User='test';
  //Build SQL query
    var sql = "SELECT * FROM users WHERE Username='" + username + "'";
    
  //Execute the query
    con.query(sql, function (err, result) {

    //Check for errors
      if (err) throw err;
        var marshieCheck = result;
        marshieCheck.unshift("/profile");
        //console.log(marshieCheck);
        
        //Build SQL query
          var sql = "SELECT * FROM posts WHERE User='" + username + "'";
    
        //Execute the query
          con.query(sql, function (err, result) {

        //Check for errors
          if (err) throw err;
          
          var marshieCheck2 = result;
          marshieCheck.push(marshieCheck2);
          console.log(marshieCheck);
          res.send(JSON.stringify(marshieCheck));
    
      
          });
          con.end();
    });
    //con.end();
});


app.get('/users/*', handleGetRequest);//Subfolders


app.get('/users', handleGetRequest);


app.get('/login/*', function (req, res) {
//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });
//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors
      //Output results
        console.log("Connected!");
      }
  );
    
//assign marshie details
  var username = req.query.username;
  var password = req.query.password;
  
//Build SQL query
  var sql = "SELECT * FROM users WHERE Username='" + username + "'";
    
//Execute the query
  con.query(sql, function (err, result) {

    //Check for errors
      if (err) throw err;
        
      var marshieCheck = result;
      marshieCheck.unshift("/login");
      console.log(marshieCheck);
      if (username == "" || username == null) {
        res.send('login failed');
      } 
      else if(marshieCheck[1].Password === password) {
        req.session.user = marshieCheck[1].Username;
        req.session.admin = true;
        console.log(req.session);
        res.send(JSON.stringify(marshieCheck));
      }
      
  });
    con.end();
});


app.get('/search/*', function (req, res) {
//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });
//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors
      //Output results
        console.log("Connected!");
      }
  );
    
//assign marshie details
  var searchCriteria = req.query.search;
  console.log(searchCriteria);
//Build SQL query
  var sql = "SELECT * FROM posts WHERE User like '%" + searchCriteria + "%' ORDER BY User, ID DESC";
    
//Execute the query
  con.query(sql, function (err, result) {
    //Check for errors
          if (err) throw err;
             console.log(result);
             res.send(JSON.stringify(result));
          
  });
});


app.get('/logout', function (req, res) {
  req.session.destroy();
  console.log("session destroyed!");
  res.send("logout success!"); 
  return;
});


app.post('/register', function (req, res){
//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });
//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors

      //Output results
        console.log("Connected!");
      }
  );

  storeMarshie(req.body);
  console.log("done!");
    //Close the connection
      console.log("Disconnected!");
  con.end();
  res.send("{OK!}");
  return;
});


app.post('/post', function (req, res){
//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });
//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors

      //Output results
        console.log("Connected!");
    }
  );

  storeMarshiePost(req.body);
  console.log("done!");
    //Close the connection
      console.log("Disconnected!");
      con.end();
  res.send("{OK!}");
  return;
});


//Set up express to serve static files from the directory called 'public'
  app.use(express.static('public'));

//Start the app listening on port 8080
  app.listen(8080);


//Function that adds test data to database
function storeMarshie(marshie){
  var name = marshie.name;
  var username = marshie.username;
  var email = marshie.email;
  var password = marshie.password;
  var avatar = marshie.avatar;
  
  //Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });

//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
        if (err) throw err;//Check for errors

        //Output results
          console.log("Connected!");
    }
);

//Build SQL query
  var sql = "INSERT INTO users (Name, Username, Email, Password, Avatar) " + 
  "       VALUES ('" + name + "', '" + username + "', '" + email + "', '" + password + "', '" + avatar + "')";

//Execute the query
  con.query(sql, function (err, result) {

  //Check for errors
    if (err) throw err;

  //Output results
    console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
  });
  con.end();
}

//Function that adds test data to database
function storeMarshiePost(marshiePost){
  var user = marshiePost.user;
  var avatar = marshiePost.avatar;
  var contentType = marshiePost.contentType;
  var content = marshiePost.content;
  var datePosted = marshiePost.datePosted;
  var monthPosted = marshiePost.monthPosted;
  var yearPosted = marshiePost.yearPosted;
  var hourPosted = marshiePost.hourPosted;
  var minutePosted = marshiePost.minutePosted;

//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });
//Connect to the database
  con.connect(
    //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors

      //Output results
        console.log("Connected!");
    }
);

//Build SQL query
  var sql = 'INSERT INTO posts (User, Avatar, ContentType, Content, DatePosted, MonthPosted, YearPosted, HourPosted, MinutePosted) ' +
'       VALUES ("' + user + '", "' + avatar + '", "' + contentType + '", "' + content + '", "' + datePosted + '", "' + monthPosted + '", "' + yearPosted + '", "' + hourPosted + '", "' + minutePosted + '")';

//Execute the query
  con.query(sql, function (err, result) {

//Check for errors
    if (err) throw err;

    //Output results
      console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
  });
  con.end();
}


/* Define the function that will handle GET requests to our web service
This method is only called if the user requests /users     */
function handleGetRequest(request, response){
//Create a connection object with the user details
  var con = mysql.createConnection({
    host: "localhost",
    user: "krys17",
    password: "Kristen",
    database: "marshienet"
  });

//Connect to the database
con.connect(
  //This function is called when the connection is attempted
    function(err) {
      if (err) throw err;//Check for errors

      //Output results
        console.log("Connected!");
    }
);

//Split the path of the request into its components
  var pathArray = request.url.split("/");

//Get the last part of the path
  var pathEnd = pathArray[pathArray.length - 1];

//If path ends with 'users' we return all users
  if(pathEnd === 'users'){

  //Build SQL query
    var sql = "SELECT * FROM posts";
    
  //Execute the query
    con.query(sql, function (err, result) {

      //Check for errors
        if (err) throw err;

        response.send(JSON.stringify(result));
    });
  }
  con.end();
}