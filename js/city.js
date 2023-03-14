const cityImage = document.getElementById('city-image');
const cityAreas = document.querySelectorAll('.city-areas');
const infoCityIntro = document.querySelector('.info-city-intro');
const infoCity = document.querySelectorAll('.info');

for (let i = 0; i < cityAreas.length; i++) {
  cityAreas[i].addEventListener('mouseover', function() {
    cityImage.src = this.dataset.src;

    // hide all info divs first
    for (let j = 0; j < infoCity.length; j++) {
      infoCity[j].style.display = 'none';
    }

    // show the corresponding info div based on the class name of the area
    const targetInfoDiv = document.getElementById(`info-city-${this.dataset.info}`);
    if (targetInfoDiv) {
      infoCityIntro.style.display = 'none';
      targetInfoDiv.style.display = 'block';
    } else {
      infoCityIntro.style.display = 'block';
    }
  });

  cityAreas[i].addEventListener('mouseout', function() {
    cityImage.src = '/img/city_380x290.png';

    // Hide info divs
    infoCityIntro.style.display = 'block';
    for (let j = 0; j < infoCity.length; j++) {
      infoCity[j].style.display = 'none';
    }
  });
}