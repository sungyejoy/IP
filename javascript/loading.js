console.log('Need to wait');

setTimeout(function() {
  console.log('setting window location');
  window.location.href = "index.html";
}, 4000);