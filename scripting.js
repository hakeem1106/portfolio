document.body.onload = yourPick;

function yourPick(){


var intro = document.getElementById('welcome');

var head = document.createTextNode("Gerald Bryant: Software Developer").style.alignItems="center";

intro.appendChild(head);

}


    function initMap() {
        var map = new google.maps.Map(document.getElementById('here'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
