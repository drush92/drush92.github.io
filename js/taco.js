
const tacoImage = document.getElementById('taco-image');
const areas = document.getElementsByTagName('area');
const infoShell = document.getElementById('info-shell');
const infoMeat = document.getElementsByClassName('info-meat');
const infoSalad = document.getElementById('info-salad');

for (let i = 0; i < areas.length; i++) {
    areas[i].addEventListener('mouseover', function() {
        tacoImage.src = this.dataset.src;

        if (this.classList.contains('taco-shell')) {
            infoShell.style.display = 'block';
            for (let j = 0; j < infoMeat.length; j++) {
                infoMeat[j].style.display = 'none';
            }
            infoSalad.style.display = 'none';
        } else if (this.classList.contains('taco-meat-1') || this.classList.contains('taco-meat-2') || this.classList.contains('taco-meat-3')) {
            for (let j = 0; j < infoMeat.length; j++) {
                infoMeat[j].style.display = 'block';
            }
            infoShell.style.display = 'none';
            infoSalad.style.display = 'none';
        } else if (this.classList.contains('taco-salad')) {
            infoSalad.style.display = 'block';
            infoShell.style.display = 'none';
            for (let j = 0; j < infoMeat.length; j++) {
                infoMeat[j].style.display = 'none';
            }
        }
    });
    areas[i].addEventListener('mouseout', function() {
        tacoImage.src = 'img/taco_bw_600.png';

        // Hide info divs
        infoShell.style.display = 'none';
        for (let j = 0; j < infoMeat.length; j++) {
            infoMeat[j].style.display = 'none';
        }
        infoSalad.style.display = 'none';
    });
}