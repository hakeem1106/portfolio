document.body.onload = yourPick;

function yourPick(){


var intro = document.getElementById('welcome').style.alignItems="center";

var head = document.createTextNode("Gerald Bryant: Software Developer");

intro.appendChild(head);

}


    function initMap() {
        var map = new google.maps.Map(document.getElementById('here'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
