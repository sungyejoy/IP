


document.addEventListener("DOMContentLoaded", function() {

    const APIKEY = "65994a710b08685b19232be3";
    const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";
  

    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
        

      e.preventDefault();
  

      // Setting variables to be sent to database
    let userID = document.getElementById("username").value;
    let passID = document.getElementById("password").value;
    let emailID = document.getElementById("email").value;
    let firstID = document.getElementById("first").value;
    let lastID = document.getElementById("last").value;
  

      let jsondata = {
        "username": userID,
        "password": passID,
        "email": emailID,
        "first": firstID,
        "last" : lastID,
      };
      let settings = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
    }

    // Clear input form
    fetch("https://interactivedev-5e86.restdb.io/rest/register", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById("formsubmitbtn").disabled = false;

          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          document.getElementById("email").value = "";
          document.getElementById("first").value = "";
          document.getElementById("last").value = "";
          alert("Registration successful, you may login now")
          window.location.href = "login.html";
        });
        
    });

    
})



