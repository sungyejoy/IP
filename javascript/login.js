document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65994a710b08685b19232be3";
    const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";

    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
        e.preventDefault();
        console.log('form submitted!')

        let passID = document.getElementById("password").value;
        let userID = document.getElementById("username").value;

        let url = `${APIURL}?q={"password": "${passID}", "username": "${userID}"}`;
                
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
            }
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.length > 0 ) {
                console.log("User found in database", data);

                const numID = data[0]._id; 
                const emailID = data[0].email;
                const firstID = data[0].first;
                const lastID = data[0].last;
                const pointsID = data[0].points;
                const userLogged = true;

                localStorage.setItem("loggedInUser", JSON.stringify({username: userID, password: passID, userLogged, id: numID, first: firstID, last: lastID, email: emailID, points: pointsID}));

                window.location.href = "loading.html" 
                
                alert(`Logging in as ${userID}`)
                    

            } else {
                console.log("Username not found in database");
                alert("Username or password not found, please register or try again")   
            }
        })

        .catch(error => console.error('Error fetching ur data', error));
    });
})

/*const loggedInUser = JSON.parse(localStorage.getItem(loggedInUser));

if (loggedInUser && loggedInUser.userlogged) {
    const userName= loggedInUser.username;
    const userPassword = loggedInUser.password; 

    document.body.innerHTML += "Welcome ${userName}, you are logged in"
} else {
    window.location.href ="login.html"
} */
