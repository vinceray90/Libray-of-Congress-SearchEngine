// var searchFormEl = $('');
// var searchFieldEl = $('');
// var formatFieldEl = $('');
// var clickButtonEl = $(''); // don't need this???

// click event handler
var formSubmitHandler = function(event) {
    event.preventDefault();

    // get text from search field
    var searchField = searchFieldEl.value.trim();
    // get value in dropdown
    var formatField = formatField.value;

    // plug this shit into a queryString probably?
    var searchQuery = '?' + searchField + formatField; // this DOES NOT work rn, just a rough outline

    var libraryOfConURL = 'https://www.liiiiiink.com'; // needs real link

    if (yadayada) {
        location.replace(libraryOfConURL + searchQuery);
    }
}



searchFormEl.addEventListener('submit', formSubmitHandler);