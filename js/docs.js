// Get the search input and docs list elements
const searchInput = document.querySelector('#search-docs');
const docsList = document.querySelector('#docs-list');

// Get the list items in the docs list
const docs = Array.from(docsList.children);

// Add an event listener to the search input to filter the docs list on input
searchInput.addEventListener('input', () => {
const searchTerm = searchInput.value.toLowerCase();

// Filter the docs list based on the search term
const filteredDocs = docs.filter(doc => {
const docName = doc.textContent.toLowerCase();
return docName.includes(searchTerm);
});

// Show only the filtered docs
docs.forEach(doc => {
if (!filteredDocs.includes(doc)) {
doc.classList.add('d-none');
} else {
doc.classList.remove('d-none');
}
});
});

// Add an event listener to the "View All" button to show all docs
const viewAllButton = document.querySelector('#view-all-docs');
viewAllButton.addEventListener('click', () => {
docs.forEach(doc => {
doc.classList.remove('d-none');
});

searchInput.value = '';
});
