import map from './map'

document.getElementById("gradient-button-1").onclick = function() {
    const inst = document.getElementById('institutionSelect') as HTMLSelectElement;
    const selected_institution = inst.options[inst.options.selectedIndex];
    const ins = document.getElementById('insuranceSelect') as HTMLSelectElement;
    const selected_insurance = ins.options[ins.options.selectedIndex];

    
};
console.log(map);

