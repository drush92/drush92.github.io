const docList = document.querySelector('#doc-list');
const videoList = document.querySelector('#video-list');
const photoList = document.querySelector('#photo-list');
const musicList = document.querySelector('#music-list');
const docInput = document.querySelector('#doc-input');
const viewDocsButton = document.querySelector('#button-view-docs');

viewDocsButton.addEventListener('click', () => {
  if (docInput.value === "/docs") {
    docList.style.display = "block";
    videoList.style.display = "none";
    photoList.style.display = "none";
    musicList.style.display = "none";
    docInput.value = '/docs\nall documents loaded successfully';
  } else if (docInput.value === "/videos") {
    docList.style.display = "none";
    videoList.style.display = "block";
    photoList.style.display = "none";
    musicList.style.display = "none";
    docInput.value = '/videos\nall videos loaded successfully';
  } else if (docInput.value === "/photos") {
    docList.style.display = "none";
    videoList.style.display = "none";
    photoList.style.display = "block";
    musicList.style.display = "none";
  } else if (docInput.value === "/audio") {
    docList.style.display = "none";
    videoList.style.display = "none";
    photoList.style.display = "none";
    musicList.style.display = "block";
    docInput.value = '/audio\nall audio loaded successfully';
  } else {
    alert("Invalid input.");
  }
});

