document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65994a710b08685b19232be3";
    const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";
  
    function minusPoints(event) {
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
      let currentPoints = loggedInUser.points; 
  
      if (currentPoints < 1300){
        alert("Insufficient points to redeem")
      } else {
        let jsondata = {
          "username": userID,
          "password": passID,
          "email": emailID,
          "first": firstID,
          "last": lastID,
          "points": currentPoints - 1300 
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
            console.log("Item purchased");
            alert("Order received, please check your email"); 
            loggedInUser.points = currentPoints - 1300; // Update points after successful purchase
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            window.location.href = "tutorial.html";
          })
          .catch(error => {
            console.error("Error:", error);
            alert("Failed to purchase");
          });
      }
    }
  
    document.getElementById("purchase").addEventListener("click", minusPoints);
  });