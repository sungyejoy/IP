function getContacts(limit = 10, all = true) {
  
    //[STEP 7]: Create our AJAX settings
    let settings = {
      method: "GET", //[cher] we will use GET to retrieve info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
    }

    //[STEP 8]: Make our AJAX calls
    // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
    // RESTDb/NoSql always adds in a unique id for each data; we tap on it to have our data and place it into our links 
    fetch("https://interactivedev-5e86.restdb.io/rest/contact", settings)
      .then(response => response.json())
      .then(response => {
        let content = "";

        for (var i = 0; i < response.length && i < limit; i++) {
            content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
            <td>${response[i].email}</td>
            <td>${response[i].subj}</td>
            <td>${response[i].msg}</td>
           
            <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-email='${response[i]._email}' data-name='${response[i].name}' data-gender='${response[i].subj}' data-age='${response[i].msg}'>Update</a></td></tr>`;
  
          }
        })
    }