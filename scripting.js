document.body.onload = yourPick;

function yourPick(){


var intro = document.getElementById('welcome');

var head = document.createTextNode("Gerald Bryant: Software Developer").style.alignItems = "center";

intro.appendChild(head);

}


    function initMap() {
        var map = new google.maps.Map(document.getElementById('here'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
