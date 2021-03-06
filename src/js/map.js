function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        center: {lat: 59.93632276, lng: 30.32106467},
        scrollwheel: false
    });

    var image = 'img/map-marker.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 59.93632276, lng: 30.32106467},
        map: map,

        icon: image
    });
}