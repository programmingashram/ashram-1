if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}


let x = document.getElementById('menu-trig');
let y = document.getElementById('site-menu');
let z = document.getElementById('close');

x.addEventListener('click', function(){
    y.classList.toggle('show');
})

z.addEventListener('click', function(){
  y.classList.remove('show');
})