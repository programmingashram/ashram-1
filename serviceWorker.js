const staticDevCoffee = "programming-ashram-v1";
const assets = [
  "/",
  "/ashram-1/index.html",
  "/assest/theming/style.css",
  "/js/app.js",
//   "./assest/images/icons/coffee1.jpg",
//   "./assest/images/icons/coffee2.jpg",
//   "./assest/images/icons/coffee3.jpg",
//   "./assest/images/icons/coffee4.jpg",
//   "./assest/images/icons/coffee5.jpg",
//   "./assest/images/icons/coffee6.jpg",
//   "./assest/images/icons/coffee7.jpg",
//   "./assest/images/icons/coffee8.jpg",
//   "./assest/images/icons/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
