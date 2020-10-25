import {
    Map as LeafletMap,
    TileLayer,
    LatLng,
    Icon,
    Marker
} from 'leaflet'

const austin = new LatLng(30.26, -97.74)

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
    center: austin
}).setView(austin, 13)
map.invalidateSize()

// Icon classes declaration
const greenIcon = new Icon({
    iconUrl: '../static/images/Medview_logo_green.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})
const blueIcon = new Icon({
    iconUrl: '../static/images/Medview_logo_blue.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

//testmapfeatures
new Marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("Yo!");

/*
ASSUME THAT:
'info' is an array of size 4, such that:
  name = institution name
  type = institution type
  location = institution location
  insurance = does it take given insurance? (automatically no if nothing sent // marker color indicates this too)
These four pieces of information make up the pop up for each marker
*/
class Institution {
    name: String;
    type: String;
    location: String;
    insurance: Boolean;
    constructor(name, type, location, insurance) {
      this.name = name;
      this.type = type;
      this.location = location;
      this.insurance = insurance;
    }
}
// Main variables
const info = new Array; // This should be an array of Institution objects
const name_insurer = ""; // Generated through drop-downs on home page
const type_institution = "";// Generated through drop-downs on home page


/**
 * Signal to generate markers on the map
 * @param data {
 *      name: string,
 *      address: string,
 *      institution_type: string,
 *  }
 */
/*
export function initMarkers(data) {
    const api_key = 'AIzaSyDqO6SLsNiiSggPDPpuQOq24oLGMhXmQqM';
    const api_input = data.address.replace(' ', '+')
    const uri = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${api_key}&${api_input}&textquery`
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            createMarker(JSON.parse(this.response).candidates[0].geometry.location); // { lat: Number, lng: Number }
        }
    }
    xhr.open("GET", uri, true)
    xhr.send()
}
*/



// MAP LOGIC
/* 
Marker should be:
  - Green if location's list of supported insurances includes the provided one (insurance dropdown != any and location supports insurance)
  - Blue otherwise
*/ 
/*
for (let index = 0; index < info.length; index++) {
    let inst = info[index];
    // logic for placing one icon 
    if (inst.name === name_insurer) {
        if (inst.insurance === true) {
            new Marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup(`${inst.name}:\n${inst.type}\n${inst.location}\nAccepts ${name_insurer}`);
        } else {
            new Marker([51.5, -0.09], {icon: blueIcon}).addTo(map).bindPopup(`${inst.name}:\n${inst.type}\n${inst.location}\nDoes not accept ${name_insurer}`);
        }
    }
}
*/
export default map
