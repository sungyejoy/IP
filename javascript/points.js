const APIKEY = "65994a710b08685b19232be3";
const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";

let jsondata = {
    points: 40
}

let settings = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "x-apikey": APIKEY,
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify(jsondata),
}
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const numID= loggedInUser.id;


console.log(loggedInUser)   


fetch(`${APIURL}/${numID}/points`, settings)
.then(response => response.json())
    .then(data => {
        console.log(data);
        console.log("Points sent");
        alert("You have received 50 points!")
    })




