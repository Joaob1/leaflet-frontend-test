var map = L.map('map').setView([-19, -44], 7);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19}).addTo(map);

function onEachFeature(feature, layer) {
    var popupContent = '<p>' + feature.geometry.type + '</p>';
    if (feature.properties && feature.properties.popupContent) {
        popupContent += "<br>"+feature.properties.popupContent;
    }
    layer.bindPopup(popupContent);
}

$.getJSON("https://terraq.com.br/api/teste-leaflet/pontos", function(data) {}).done(
    function(data) {
        var featureCollection = L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                var iconUrl = feature.properties.icon;
                var featureIcon = L.icon({
                    iconUrl: "https://www.freeiconspng.com/thumbs/warning-icon-png/warning-icon-24.png",
                    iconSize: [32, 37],
                    iconAnchor: [16, 37],
                    popupAnchor: [0, -28]
                });
                return L.marker(latlng, {icon: featureIcon});
            },
            onEachFeature: onEachFeature
        }).addTo(map);
    }		
);