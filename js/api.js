function initMap() {
    var lima = { lat: -12.0464, lng: -77.0428 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: lima
    });
    var localizaciones = [
        { lat: -12.0464, lng: -77.0428, nombre: "Miraflores" },
        { lat: -12.0868, lng: -77.0222, nombre: "Gamarra – La Victoria" },
        { lat: -12.0900, lng: -77.0295, nombre: "Surquillo" },
        { lat: -12.0851, lng: -77.0333, nombre: "Lince" },
        { lat: -11.9795, lng: -77.0620, nombre: "Independencia" },
        { lat: -12.0220, lng: -76.9745, nombre: "Santa Anita" },
        { lat: -12.0000, lng: -77.0230, nombre: "San Juan de Lurigancho" }
    ];
    localizaciones.forEach(function(local) {
        var marker = new google.maps.Marker({
            position: { lat: local.lat, lng: local.lng },
            map: map,
            title: local.nombre,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });
    });
}

