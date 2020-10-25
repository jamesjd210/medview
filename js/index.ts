import map from './map'

const submit : HTMLElement = document.getElementsByClassName("gradient-button-1")[0] as HTMLElement
submit.onclick = function() {
    const sel_type = document.getElementById('institutionSelect') as HTMLSelectElement
    const opt_type = sel_type.options[sel_type.options.selectedIndex]
    const sel_insurer = document.getElementById('insuranceSelect') as HTMLSelectElement
    const opt_insurer = sel_insurer.options[sel_insurer.options.selectedIndex]

    const type : string = opt_type.text.toLowerCase()
    const insurer : string = opt_insurer.text.toLowerCase()

    const uri : string = document.location.protocol + '//' + document.location.host + `/query?insurer=${insurer}&institution_type=${type}`
    
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //initMarkers(JSON.parse(this.response));
        }
    }
    xhr.open("GET", uri, true)
    xhr.send()
}

console.log(map)

