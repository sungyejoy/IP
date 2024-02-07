document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65994a710b08685b19232be3";
    const APIURL = "https://interactivedev-5e86.restdb.io/rest/image";
    let imgID; 
  
    function fetchImage() {
      fetch(`${APIURL}/${imgID}`, { 
        method: "GET",
        headers: {
          "x-apikey": APIKEY
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.json();
      })
      .then(data => {
        const imageUrl = data[0].origami; 
    const image = document.createElement("img");
        console.log(imageUrl)
        console.log(image)
        image.src = imageUrl;
        document.getElementById("image-container").appendChild(image);
      })
      .catch(error => {
        console.error("Error fetching image:", error);
      });
    }
  
    document.getElementById("formsubmitbtn").addEventListener("click", function(e) {
      e.preventDefault();
  
      let file = document.getElementById("dropzone-file").files[0];
      if (!file) {
        alert("Please select an image file.");
        return;
      }
  
      let formData = new FormData();
      formData.append("origami", file);
  
      let settings = {
        method: "POST",
        headers: {
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: formData
      };
  
      fetch(APIURL, settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert("Image uploaded successfully");
          imgID = data._id; 
          fetchImage();
        })
        .catch(error => {
          console.error("Error uploading image:", error);
          alert("Failed to upload image");
        });
    });
});