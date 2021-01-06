import { setSearchFocus } from "./searchBar.js"
import { getSearchTerm } from "./dataFunctions"


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    //set the focus
    setSearchFocus();
    // 3 listeners

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" function
const submitTheSearch = (event) => {
    event.preventDefault();
    //delete search results
    // process the search
    processTheSearch();
    // set the focus
    setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
    //clear the stats line
    const searchTerm = getSearchTerm();
    if (getSearchTerm === '') return;
    const resultArray = await retrieveSearchResults(searchTerm);
};