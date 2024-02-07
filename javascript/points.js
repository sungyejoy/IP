const APIKEY = "65994a710b08685b19232be3";
const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


const numID = loggedInUser.id;
const userID = loggedInUser.username;
const passID = loggedInUser.password;
const emailID = loggedInUser.email;
const firstID = loggedInUser.first;
const lastID = loggedInUser.last;

let jsondata = {
  "username": userID,
  "password": passID,
  "email": emailID,
  "first": firstID,
  "last": lastID,
  "points": 40
};

let settings = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "x-apikey": APIKEY,
    "Cache-Control": "no-cache"
  },
  body: JSON.stringify(jsondata),
};
console.log(loggedInUser)   


fetch(`${APIURL}/${numID}`, settings)
.then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data))
        console.log("Points sent");
        alert("You have received 50 points!")
    })




