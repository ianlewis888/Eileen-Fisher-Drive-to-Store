var mapsApiKey = "AIzaSyD-u97DVBBkrS1j2_Q654gfZ24xdGqcEl8";

function initMap() {
  var pin = {lat: 40.6873014, lng: -73.9934601};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: pin,
    styles: mapStyles
    });
  var marker = new google.maps.Marker({
    position: pin,
    map: map
  });
}

var mapsScript = document.createElement('script');
mapsScript.src = "https://maps.googleapis.com/maps/api/js?key="+mapsApiKey+"&callback=initMap";
mapsScript.async = true;
document.getElementsByTagName('body')[0].appendChild(mapsScript);

var images = document.getElementsByTagName("img");
for (var i=0; i<images.length;i++) { images[i].setAttribute("draggable", "false"); }

var makingSpace = document.getElementsByClassName("making-space")[0];
var cta = document.getElementsByClassName("cta")[0];
var logo = document.getElementsByClassName("logo")[0];

var greatClothes = document.getElementsByClassName("great-clothes")[0];
var future = document.getElementsByClassName("future")[0];
var assumptions = document.getElementsByClassName("assumptions")[0];

function execute_animation() {

  makingSpace.classList.add("fadein");
  cta.classList.add("fadein");
  logo.classList.add("fadein");

  greatClothes.classList.add("text-animation-1");
  setTimeout(function() {
    greatClothes.classList.remove("text-animation-1");
    future.classList.add("text-animation-1");
  }, 2500);

  setTimeout(function() {
    future.classList.remove("text-animation-1");
    assumptions.classList.add("text-animation-2");
  }, 5000);
}
