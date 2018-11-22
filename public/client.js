//array of quotes
var quoteArray = [
  "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.",
  "Love is putting someone else’s needs before yours.",
  "The flower that blooms in adversity is the most rare and beautiful of them all.",
  "If you can’t say something nice, don’t say nothin’ at all.",
  "Ohana means family, and family means no one gets left behind or forgotten.",
  "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
  "Ladies do not start fights, but they can finish them.",
  "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
  "Our fate lives within us. You only have to be brave enough to see it.",
  "You must not let anyone define your limits because of where you come from. Your only limit is your soul.",
  "Even miracles take a little time.",
  "If you focus on what you left behind, you will never be able to see what lies ahead.",
  "You control your destiny. There are no magical shortcuts to solving your problems.",
  "A true hero isn't measured by the size of his strength, but by the strength of his heart.",
  "The problem is not the problem. The problem is your attitude about the problem.",
  "If you don't know where you want to go, then it doesn't matter which path you take.",
  "Your identity is your most valuable possession. Protect it.",
  "Being brave doesn't mean you go looking for trouble.",
  "Happiness is the richest thing we will ever own.",
  "Remember, you're the one who can fill the world with sunshine.",
  "The only predictable thing about life is its unpredictability."
];


//Set up page when window has loaded
window.onload = init;


/* Sets up the page */
function init(){
  checkSession(); 
}


function createLoginScreen() {
  //create contents div
    contents = document.createElement("div");
    contents.id = "contents";
  //create side image
    logoDiv = document.createElement("div");
    logoDiv.id = "logoDiv";
    logoDiv.innerHTML = '<center><img src="images/marshienet.png" width=500></center>';
  
  //create form div
    formDiv = document.createElement("div");
    formDiv.id = "formDiv";
  
  //create login screen
    loginForm = document.createElement("div");
    loginForm.id = "loginForm";
    headerL = document.createElement("h1");
    headerL.innerHTML = "Login";
    logForm = document.createElement("form");
    logForm.name = "logForm";
    logForm.action = "";
    arrange = document.createElement("table");
    arrange.id = "arrangeElements";
    arrange.innerHTML = '<tr><td id="data">Username: </td><td><input type="text" id="uName" name="username" class="inputFields" size="40" placeholder="Kkkkkkk3"></td></tr><tr><td id="data">Password: </td><td><input type="password" name="password" id="password" class="inputFields"  size="40" placeholder="*********"></td></tr><tr><td><input type="button" class="submit" value="Submit" onclick="loginMarshie()"><input type="reset" class="clear" value="Clear"></td></tr>';
    logForm.appendChild(arrange);
   
  //create registration screen  
    regForm = document.createElement("div");
    regForm.id = "regForm";
    headerR = document.createElement("h1");
    headerR.innerHTML = "Register";
    logFormReg = document.createElement("form");
    logFormReg.name = "logForm";
    logFormReg.action = "";
    arrangereg = document.createElement("table");
    arrangereg.id = "arrangeElements";
    arrangereg.innerHTML = '<tr><td id="data">Name: </td><td><input type="text" id="name" name="name" class="inputFields" size="40" placeholder="Kkkkkkkk"></td></tr><tr><td id="data">Email: </td><td><input type="email" id="email" name="email" class="inputFields" size="40" placeholder="K@a.com"></td></tr><tr><td id="data">Username: </td><td><input type="text" id="uNameReg" name="uName" class="inputFields" size="40" placeholder="Kkkkkkk3"></td></tr><tr><td id="data">Password: </td><td><input type="password" id="passwordReg" name="password" class="inputFields" size="40" placeholder="*********"></td></tr><tr><td id="data">Choose your spirit <br> Marshie: </td><td><select id="avatar" name="avatar" class="inputFields"><option value="grumpster">Grumpster (M)</option><option value="dok">Dok (M)</option><option value="blushie">Blushie (F)</option><option value="smiley">Smiley (F)</option><option value="dozer">Dozer (F)</option><option value="sneezie">Sneezie (M)</option><option value="sillie">Sillie (M)</option></select></td></tr><tr><td><input type="button" class="submit" value="Submit" onclick="enterMarshie()"><input type="reset" class="clear" value="Clear"></td></tr>';
    logFormReg.appendChild(arrangereg);
    
  //Get a reference to the document body
    var docBody = document.getElementsByTagName("body")[0];//Only one body
    
    docBody.innerHTML = '<div id="headerBar"></div><div id="logoBar"><img src="images/krisneyBack.png" id="logo"><div id="animationX"><img src="images/krisney.gif" id="krissy1"></div></div>';
    
  //add HTML to page
    contents.appendChild(logoDiv);
    loginForm.appendChild(headerL);
    loginForm.appendChild(logForm);
    regForm.appendChild(headerR);
    regForm.appendChild(logFormReg);
    formDiv.appendChild(loginForm);
    formDiv.appendChild(regForm);
    contents.appendChild(formDiv);
    docBody.appendChild(contents);
    
  createFooter();
}

    
function createFooter() {
  //Get a reference to the document body
    var docBody = document.getElementsByTagName("body")[0];//Only one body
    
  footerDiv = document.createElement("div");
  footerDiv.id = "footer";
  para = document.createElement("p");
  para.innerHTML = "©Krisney.com presented by Kristen Rebello 2017";
  footerDiv.appendChild(para);
  docBody.appendChild(footerDiv);
}


function createUserHeader(user) {

  //Get a reference to the document body
    var docBody = document.getElementsByTagName("body")[0];//Only one body
    var oldContents = document.getElementById("contents");
    var oldFooter = document.getElementById("footer");
    
  //create contents div
    newContents = document.createElement("div");
    newContents.id = "contents";
    
  //find headerDiv
    var header = document.getElementById("headerBar");
  //create elements for header div
    var blockMenu = document.createElement("div");
    blockMenu.className = "blockMenu";
    
    var userBar = document.createElement("div");
    userBar.id = "userBar";
    userBar.innerHTML = '<img src="images/' + user.Avatar + '.png"><div class="dropdown"><button class="dropbtn">' + user.Username + '</button><div class="dropdown-content"><button id="link1" onclick="userProfile()">PROFILE</button><button id="link2" onclick="">EDIT</button></div></div><div id="searchBar"><input type="text" id="inputFields" name="search" placeholder="Enter username..."><input type="button" id="search" value="Search" onclick="searchByUser()"></div>';
    
    var button = document.createElement("button");
    button.id = "logout";
    button.addEventListener("click", logout);
    var li = document.createElement("div");
    li.className = "li";
    var threeD = document.createElement("div");
    threeD.className = "threeD";
    threeD.innerHTML = 'Logout<span hidden="true" class="threeDBox"><span class="front">Logout</span><span class="back">Logout</span></span>';
    li.appendChild(threeD);
    button.appendChild(li);

  //assign to blockMenu
    blockMenu. appendChild(userBar);
    blockMenu.appendChild(button);
    
  //assign to headerDiv
    header.appendChild(blockMenu); 
    
  //change page
    docBody.removeChild(oldContents);
    docBody.removeChild(oldFooter);
    docBody.appendChild(newContents);        
}


function createUserHome(user) {
  createUserHeader(user);
  loadUserPosts();
  createFooter();
}


function enterMarshie() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        //alert("xhttp.responseText = " + xhttp.responseText);   
          location.reload(); 
        }
  else {
    //alert("Error communicating with server: " + xhttp.status);
    }
  }; 
  var name = document.getElementById("name").value;
  var username = document.getElementById("uNameReg").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("passwordReg").value;
  var state = document.getElementById("state");
  var avatar = document.getElementById("avatar")[document.getElementById("avatar").selectedIndex].value;
  
  //build empty object
    var marshie = {};
  //store user details in the object
    marshie.name = name;
    marshie.username = username;
    marshie.email = email;
    marshie.password = password;
    marshie.avatar = avatar;
  //marshie created!  
    var jsonMarshie = JSON.stringify(marshie);
        
    xhttp.open("POST", "/register", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonMarshie);
    //alert(jsonMarshie);
}


function loginMarshie() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        if(xhttp.responseText != "login unsuccessful") {
          var marshie = JSON.parse(this.responseText);
          alert("login successful!");
          checkSession();
          //createUserHeader(marshie[1]);
        }    
      }
      else {
        //alert("Error communicating with server: " + xhttp.status);
      }
    }; 
  
    var username = document.getElementById("uName").value;
    var password = document.getElementById("password").value;
  
    xhttp.open("GET", "/login/?username=" + username + "&password=" + password, true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    //alert(jsonMarshie);   
}


function loadUserPosts() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        //Convert JSON to a JavaScript object
          //alert(this.responseText);
          var dataObj = JSON.parse(this.responseText);
          loadPostsGivenRequest(dataObj);

      }
    };

    //Request data from all users
      xhttp.open("GET", "/users", true);
      xhttp.send();
}


function searchByUser() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
          var postArray = JSON.parse(this.responseText);
          var done = [];
                
  //Create HTML table containing product data
    var htmlStr = "<center><table id='searchResultsTable' cellspacing='40' cellpadding='5'>";
    htmlStr += '<tr><td id="countOfSearch" style="font-size:20px;font-family:Lucida Calligraphy;"></td><td></td></tr>';
    for(var i=0; i<postArray.length; i++){
      htmlStr += "<tr>";
      
      if(done.indexOf(postArray[i].User) == -1){
        htmlStr += "<tr class='blankRow'><td style='height:5px;'></td><td style='height:5px;'></td></tr>";
        htmlStr += '<td class="user"><img src="images/' + postArray[i].Avatar + '.png" width=80> <p style="padding:25px 0px;position:absolute;">' + postArray[i].User + '</p></td>';
        htmlStr += '<td class="postList"><p class="cont">' + postArray[i].Content + "</p><p>" + postArray[i].DatePosted + " " + postArray[i].MonthPosted + " " + postArray[i].YearPosted +'</p></td>';
        done.push(postArray[i].User);   
      }
      else {
        htmlStr += '<td class="user">' + " " + '</td>';
        htmlStr += '<td class="postList"><p class="cont">' + postArray[i].Content + "</p><p>" + postArray[i].DatePosted + " " + postArray[i].MonthPosted + " " + postArray[i].YearPosted +'</p></td>';
      }
      htmlStr += "</tr>";
    
    }
    //Finish off table and add to document
    htmlStr += "</table></center>";
    var search = document.createElement("div");
    search.id = "searchResults";
    search.innerHTML = htmlStr;
    document.getElementById("contents").innerHTML = "";
    document.getElementById("contents").appendChild(search); 
    document.getElementById("countOfSearch").innerHTML = done.length + " Search Results found!";
    }
    else {
      //alert("Error communicating with server: " + xhttp.status);
    }
  }; 
  
  var searchCriteria = document.getElementById("inputFields").value;
  
  xhttp.open("GET", "/search/?search=" + searchCriteria, true);
  //xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}


function userProfile() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        //Convert JSON to a JavaScript object
          //alert(this.responseText);
          var dataObject = JSON.parse(this.responseText);
            
          createUserProfile(dataObject[1], dataObject[2]);

      }
    };
    //Request data from all users
      xhttp.open("GET", "/profile", true);
      xhttp.send();
}


function createUserProfile(user, posts) {
   //Get a reference to the document body
    var docBody = document.getElementsByTagName("body")[0];//Only one body 
    
    docBody.innerHTML = '<div id="headerBar"></div><div id="logoBar"><img src="images/krisneyBack.png" id="logo"><div id="animationX"><img src="images/krisney.gif" id="krissy1"></div></div><div id="contents"></div><div id="footer"></div>';
    
  //create header
    createUserHeader(user);
    
  //link home
     var homeLink = document.getElementById("link1");
     homeLink.innerHTML = "HOME";
     homeLink.onclick = "";
     homeLink.addEventListener("click", checkSession);
    
  //change title
    var title = document.getElementById("title");
    title.innerHTML = "Project MarshieNet Profile";
    
  //create sidebar
    var sidebar = document.createElement("div");
    sidebar.id="sidebar";
    
    var userDetails = document.createElement("div");
    userDetails.id = "userDetails";
    var center1 = document.createElement("center");
    center1.innerHTML = '<h1>User Profile</h1><img src="images/' + user.Avatar + '.png" id="userAvatar"><p id="loggedInUserName">' + user.Username + '</p><p id="loggedInName">Name: ' + user.Name + '</p>';
    userDetails.appendChild(center1);
    
    var quote = document.createElement("div");
    quote.id = "quote";
    var center2 = document.createElement("center");
    center2.innerHTML = '<h1>Quote</h1><p>" <span id="quoteText">If you can DREAM it, you can DO it.</span> "</p>';
    quote.appendChild(center2);
    
    sidebar.appendChild(userDetails);
    sidebar.appendChild(quote);
    
  //load user posts
    loadPostsGivenRequest(posts);
    
  //create hello user!
    var helloUser = document.createElement("div");
    helloUser.id = "helloUser";
    helloUser.innerHTML = '<p>Hello <span id="helloUsername">' + user.Username + '</span>!! Welcome to MarshieNet!!</p>';
    
  //create post here
    var postHereDiv = document.createElement("div");
    postHereDiv.id = "postHereDiv";
    
    var choice = document.createElement("div");
    choice.id = "choice";
    choice.innerHTML = '<p>Share...</p><input type="button" value="Text" class="contentType" onclick="messageContent(\'Text\')"><input type="button" value="Photo" class="contentType" onclick="messageContent(\'Photo\')">';
    
    var content = document.createElement("div");
    content.id = "content";
    content.innerHTML = '<textarea name="content" id="contentMessage" rows="10" cols="20" placeholder="Enter text here..." maxlength="200" onkeypress="getCount()"></textarea>';
    
    var postButton = document.createElement("div");
    postButton.id = "postButton";
    postButton.innerHTML = '<p id="charPara"><span id="charactersLeft">200</span> / 200 characters left</p><input type="button" value="Post" class="contentType" onclick="postPost()">';
    
    var br = document.createElement("br");
    
    postHereDiv.appendChild(choice);
    postHereDiv.appendChild(br);
    postHereDiv.appendChild(content);
    postHereDiv.appendChild(postButton);
    
  //additional elements
    var emptyDiv = document.createElement("div");
    emptyDiv.className = "emptyDiv";
    var emptyDiv2 = document.createElement("div");
    emptyDiv2.className = "emptyDiv";
    
  //Get elements from page
    var postWall = document.getElementById("postWall");
    var contents = document.getElementById("contents");
  //append everything
    contents.insertBefore(sidebar, contents.firstChild);
    postWall.insertBefore(emptyDiv, postWall.firstChild);
    postWall.insertBefore(postHereDiv, postWall.firstChild);
    postWall.insertBefore(emptyDiv2, postWall.firstChild);
    postWall.insertBefore(helloUser, postWall.firstChild); 
    
  //change quote
    changeQuote();
  //create footer
    createFooter();
}


function loadPostsGivenRequest(dataObj) {
  //create the post wall
    var postWall = document.createElement("div");
    postWall.id = "postWall";
    var center = document.createElement("center");
  
  //for each post do...          
    for(var i=dataObj.length-1; i>=0; i--){  //posts are in reverse chronological order
      var postStr = "";
      var postDiv = document.createElement("div");
      postDiv.className = "postDiv";
      postStr += '<img src="images/' + dataObj[i].Avatar + '.png" class="avatar">';
      postStr += '<div class="postText">';
      postStr += '<p class="user">' + dataObj[i].User + '</p>';
      postStr += '<p class="date">' + findMonth(dataObj[i].MonthPosted) + " " + numberFormat(dataObj[i].DatePosted) + " " + dataObj[i].YearPosted + "  at " + numberFormat(dataObj[i].HourPosted) + " : " + numberFormat(dataObj[i].MinutePosted) + '</p>';
      postStr += '</div>';
      postStr += '<div class="postContent">';
      
      //different content        
        if(dataObj[i].ContentType == "Text") {
          postStr += '<p>' + dataObj[i].Content + '</p>';
        }
        else {
          postStr += '<img src="images/' + dataObj[i].Content + '">';
        }
      postStr += '</div>';
             
      postDiv.innerHTML = postStr 
      var emptyDiv = document.createElement("div");
      emptyDiv.className = "emptyDiv";
      
    //append everything
      center.appendChild(postDiv);
      center.appendChild(emptyDiv); 
      postWall.appendChild(center); 
    }
    
  //append to contents          
    var contents = document.getElementById("contents");
    contents.appendChild(postWall);
}


//change the message content depending on what the user wants to post
function messageContent(type){
  var messCont = document.getElementById("content");
  var noOfChars = document.getElementById("charPara");
  //if user clicks on text
    if(type == "Text") {
      content.innerHTML = '<textarea name="content" id="contentMessage" rows="10" cols="20" onkeydown="getCount()" placeholder="Enter text here..." maxlength="200"></textarea>';
      noOfChars.innerHTML = '<span id="charactersLeft">200</span> / 200 characters left';    
    }
  //if user clicks on photo
    else {
      content.innerHTML = '<input type="file" name="imageToUpload" id="image" placeholder="images/" onchange="previewImage()"><br><div id="imageDiv"><img src="" id="imagePreview"></div>';
      noOfChars.innerHTML = "";
    }
}


//onchange function to get image preview
function previewImage() {
   var image = document.getElementById("image");
   
   var imagePreview = document.getElementById("imagePreview");
   var arr = image.value.split('\\');
   imagePreview.src = "images/" + arr[arr.length-1];
}


//count the letters and return the remaining characters in textarea
var value = 200;
function getCount() {
  var contentText = document.getElementById("contentMessage");
  
  if(value > 200) { value = 200; }
  else if(value < 0) { value = 0; }
  else if(event.keyCode == 8 || event.keyCode == 46) { value += 1; }
  else { value = 199 - contentText.value.length; }
  //set in span
    var charsLeft = document.getElementById("charactersLeft");
    charsLeft.innerHTML = value;
}


function logout() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText == "logout success!") {
          createLoginScreen();
        }
      }    
      else {
        //alert("Error communicating with server: " + xhttp.status);
      }
    }; 
  //Request data from all users
    xhttp.open("GET", "/logout", true);
    xhttp.send();
    
}


function postPost() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        location.reload();
      }
      else {
        //alert("Error communicating with server: " + xhttp.status);
      }
    };
  
  //createDateObject
    var currDate = new Date();
  
  //build empty object
    var marshiePost = {};
  //store user details in the object
    marshiePost.user = document.getElementById("loggedInUserName").innerHTML;
    marshiePost.avatar = document.getElementById("userAvatar").src.split('/')[document.getElementById("userAvatar").src.split('/').length-1].split('.')[0];
    marshiePost.contentType;
    marshiePost.content;
  
  //content type varies acc to what the user wants to post
    if(JSON.stringify(document.getElementsByTagName("textarea")) == "{}") {
      marshiePost.contentType = "Photo";
      marshiePost.content = document.getElementById("imagePreview").src.split('/')[document.getElementById("imagePreview").src.split('/').length-1];
    }
    else {
      marshiePost.contentType = "Text";
      marshiePost.content = document.getElementById("contentMessage").value;
    }
  
  //date and time stuff
    marshiePost.datePosted = "" + currDate.getDate();
    marshiePost.monthPosted = (currDate.getMonth() + 1) + "";
    marshiePost.yearPosted = "" + currDate.getFullYear();
    marshiePost.hourPosted = "" + currDate.getHours();
    marshiePost.minutePosted = "" + currDate.getMinutes();
  
  //post created!  
    var jsonMarshie = JSON.stringify(marshiePost);
  
  //send      
    xhttp.open("POST", "/post", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonMarshie);
    //alert(jsonMarshie);
}


function checkSession() {
  //Set up XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Called when data returns from server
      if (this.readyState == 4 && this.status == 200) {
        //Get a reference to the document body
          var docBody = document.getElementsByTagName("body")[0];//Only one body 
    
        docBody.innerHTML = '<div id="headerBar"></div><div id="logoBar"><img src="images/krisneyBack.png" id="logo"><div id="animationX"><img src="images/krisney.gif" id="krissy1"></div></div><div id="contents"></div><div id="footer"></div>';
          if(this.responseText != "undefined") {
            //alert(this.responseText);
            var arr = JSON.parse(this.responseText);
            if(arr[0] == "/check") {
              createUserHome(arr[1]);
            }
            else if(arr[0] == "/profile") {
              createUserProfile(arr[1]);
            }
          }
          else {
            createLoginScreen();
          }
      }  
      else {
        //alert("Error communicating with server: " + xhttp.status);
      }
    }; 
  //Request data from all users
    xhttp.open("GET", "/check", true);
    xhttp.send();  
}


function findMonth(number) {
  if(number == "1") {
    return "January";
  }
  else if(number == "2") {
    return "February";
  }
  else if(number == "3") {
    return "March";
  }
  else if(number == "4") {
    return "April";
  }
  else if(number == "5") {
    return "May";
  }
  else if(number == "6") {
    return "June";
  }
  else if(number == "7") {
    return "July";
  }
  else if(number == "8") {
    return "August";
  }
  else if(number == "9") {
    return "September";
  }
  else if(number == "10") {
    return "October";
  }
  else if(number == "11") {
    return "November";
  }
  else {
    return "December";
  }
}


function numberFormat(number){
  if(number == "1"){
    return "01";
  }
  else if(number == "2"){
    return "02";
  }
  else if(number == "3"){
    return "03";
  }
  else if(number == "4"){
    return "04";
  }
  else if(number == "5"){
    return "05";
  }
  else if(number == "6"){
    return "06";
  }
  else if(number == "7"){
    return "07";
  }
  else if(number == "8"){
    return "08";
  }
  else if(number == "9"){
    return "09";
  }
  else {
    return number;
  }
}


//change quote
function changeQuote() {
  //pick a quote
    var quote = document.getElementById("quoteText");
    var num = Math.floor(Math.random() * quoteArray.length);
    quote.innerHTML = quoteArray[num];
}