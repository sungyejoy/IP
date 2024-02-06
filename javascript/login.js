document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65994a710b08685b19232be3";
    const APIURL = "https://interactivedev-5e86.restdb.io/rest/register";

    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
        e.preventDefault();
        console.log('form submitted!')

        let passID = document.getElementById("password").value;
        let emailID = document.getElementById("email").value;

        let url = `${APIURL}?password=${passID}&email=${emailID}`;

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
            }
        })

        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                console.log(item);

            });
        })

        .catch(error => console.error('Error fetching ur dogshit', error));




        /* .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            validateForm();
            return response.json();
        })
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
}); */

// start here loop to check username, if username not found kick him out. if username correct, check pw
/* function validateForm() {
    let x = document.forms["login"]["email"].value;
    if (x !=="bob@email.com"){
        alert("Email is not used")
        return false;
    }
}
*/