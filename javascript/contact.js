

//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function() {
  // What kind of interface we want at the start 
  const APIKEY = "65994a710b08685b19232be3";
  const APIURL = "https://interactivedev-5e86.restdb.io/rest/contact";

  //[STEP 1]: Create our submit form listener
  document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
      
    // Prevent default action of the button 
    e.preventDefault();

    //[STEP 2]: Let's retrieve form data
    // For now, we assume all information is valid
    // You are to do your own data validation
  let nameID = document.getElementById("name").value;
  let emailID = document.getElementById("email").value;
  let subjID = document.getElementById("subj").value;
  let msgID = document.getElementById("msg").value;


    //[STEP 3]: Get form values when the user clicks on send
    // Adapted from restdb API
    let jsondata = {
      "name": nameID,
      "email": emailID,
      "subject": subjID,
      "msg": msgID,

    };
    let settings = {
      method: "POST", //[cher] we will use post to send info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata),
  }
  fetch("https://interactivedev-5e86.restdb.io/rest/contact", settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("formsubmitbtn").disabled = false;

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subj").value = "";
        document.getElementById("msg").value = "";
        alert("Feedback sent!")
        //window.location.href = "index.html";
      });
      
  });//end click 

  
})



