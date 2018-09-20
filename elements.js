var map;

function portfolioMap() {
    map = new google.maps.Map(document.getElementById('app'), {
        center: { lat: 25.458, lng: 243.600 },
        zoom: 8
    });
};