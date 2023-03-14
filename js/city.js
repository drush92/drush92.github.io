const cityImage = document.getElementById('city-image');
const cityAreas = document.querySelectorAll('.city-areas');
const infoCity1 = document.querySelector('.info-city1');
const infoCity2 = document.querySelector('.info-city2');
const infoCity3 = document.querySelector('.info-city3');
const infoCity4 = document.querySelector('.info-city4');

for (let i = 0; i < cityAreas.length; i++) {
  cityAreas[i].addEventListener('mouseover', function() {
    cityImage.src = this.dataset.src;

    if (this.classList.contains('info-city-1')) {
      infoCity1.style.display = 'block';
      infoCity2.style.display = 'none';
      infoCity3.style.display = 'none';
      infoCity4.style.display = 'none';
    } else if (this.classList.contains('info-city-2')) {
      infoCity1.style.display = 'none';
      infoCity2.style.display = 'block';
      infoCity3.style.display = 'none';
      infoCity4.style.display = 'none';
    } else if (this.classList.contains('info-city-3')) {
      infoCity1.style.display = 'none';
      infoCity2.style.display = 'none';
      infoCity3.style.display = 'block';
      infoCity4.style.display = 'none';
    } else if (this.classList.contains('info-city-4')) {
      infoCity1.style.display = 'none';
      infoCity2.style.display = 'none';
      infoCity3.style.display = 'none';
      infoCity4.style.display = 'block';
    }
  });

  cityAreas[i].addEventListener('mouseout', function() {
    cityImage.src = '/img/city_380x290.png';

    // Hide info divs
    infoCity1.style.display = 'none';
    infoCity2.style.display = 'none';
    infoCity3.style.display = 'none';
    infoCity4.style.display = 'none';
  });
}