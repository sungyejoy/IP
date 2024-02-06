let btn = document.querySelector("button");

btn.addEventListener("click", isSend);

function isSend() {
    btn.innerHTML = "Successful! 🎉";
    btnReset();
};

function btnReset() {
    setTimeout(function() {
       btn.innerHTML = "Submit";
   }, 2000);
}