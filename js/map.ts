import {
    Map as LeafletMap,
    TileLayer,
    LatLng,
} from 'leaflet'

const austin = new LatLng(70, -90)

const streets = new TileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    accessToken: 'pk.eyJ1Ijoic2llZ2VsemMiLCJhIjoiY2tnb24zbXhnMGZrbDJ4b2ljcGtreTlvcyJ9.PflyPauy6L037Vd5nzD1zA',
    id: 'mapbox/streets-v11',
    className: 'street-layer',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
})

const map = new LeafletMap('map', {
    worldCopyJump: true,
    layers: [streets],
}).setView([90, -70], 13)
map.invalidateSize();

export default map;
