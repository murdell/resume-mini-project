function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 55.925690, lng: -3.169985 },
        { lat: 55.924271, lng: -3.171873 },
        { lat: 55.925262, lng: -3.179019 },
        { lat: 56.059646, lng: -2.719697 },
        { lat: 55.950805, lng: -2.638515 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});

}