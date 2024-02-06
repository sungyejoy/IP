document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("claim").addEventListener("click", function() {
        localStorage.setItem('points',50)
        console.log("points sent")
        alert("You have received 50 points!")
    })
})
