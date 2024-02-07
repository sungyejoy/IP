document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65994a710b08685b19232be3";
    const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";
  
    function claimPoints(event) {
      event.preventDefault();
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        console.error("No logged in user found");
        return;
      }
  
      const numID = loggedInUser.id;
      const userID = loggedInUser.username;
      const passID = loggedInUser.password;
      const emailID = loggedInUser.email;
      const firstID = loggedInUser.first;
      const lastID = loggedInUser.last;
      let currentPoints = loggedInUser.points; // Get the current points
  
      let jsondata = {
        "username": userID,
        "password": passID,
        "email": emailID,
        "first": firstID,
        "last": lastID,
        "points": currentPoints + 50 
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
  
      fetch(`${APIURL}/${numID}`, settings)
        .then(response => response.json())
        .then(data => {
          console.log(JSON.stringify(data));
          console.log("Points added");
          alert("You have received 50 points!"); 
          loggedInUser.points = jsondata.points;
          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
          //window.location.href = "tutorial.html";
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Failed to add points");
        });
    }
  
    document.getElementById("claim").addEventListener("click", claimPoints);
  });