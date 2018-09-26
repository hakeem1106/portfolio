document.body.onload = yourPick;
document.body.onload = theRest;
const intro = document.createElement("div");
const merica = document.getElementById('here');
const meObject = document.createElement("div");
const endFoot = document.createElement("footer");

function yourPick(){
var head = document.createTextNode("Gerald Bryant: Software Developer");

intro.style.alignContent = "center";
intro.appendChild(head);


document.body.insertBefore(intro, merica);
}

function theRest(){
var describe = document.createTextNode("Thank you for viewing my porfolio. I am an entry-level developer with 3+ years of development experience with HTML, Javascript, PHP, Java and other languages.");

meObject.appendChild(describe);

}

    var map, infoWindow;

    function initMap() {

        map = new google.maps.Map(document.getElementById('here'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        infoWindow = new google.maps.InfoWindow;
    }

    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude

            };



            infoWindow.setPosition(pos);
            infoWindow.setContent('location');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
