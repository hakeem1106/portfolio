document.body.onload = yourPick;

function yourPick(){


var intro = document.getElementById('welcome');

var head = document.createTextNode("Gerald Bryant: Software Developer");


intro.appendChild(head);

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
            infoWindow.setContent(formatted_address);
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

      function geocodeLatLng(geocoder, map, infoWindow) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });

        infoWindow.setContent(results[0].formatted_address);
          infoWindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
