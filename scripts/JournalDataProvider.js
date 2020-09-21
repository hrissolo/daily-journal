/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.

let journal = []
const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".mainContent")


const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("savedEntry")

    eventHub.dispatchEvent(noteStateChangedEvent)
}


export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(reponse => reponse.json())  // Parse as JSON aka turns API into js
            //"entries" is a paramater to store this in the empty journal array.
        .then(entries => {
            journal = entries
        })
}



/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}




export const saveEntry = entry => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(entry)
    })
    .then(dispatchStateChangeEvent)
}
