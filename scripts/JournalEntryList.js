import { useJournalEntries, getEntries} from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";


// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entries")
const eventHub = document.querySelector("main")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(
        () => {
        const entries = 
        useJournalEntries()
        entryLog.innerHTML = ""

    for (const entry of entries) {
        
        entryLog.innerHTML += 
        `${JournalEntryComponent(entry)}`
        
    }
    })
}


eventHub.addEventListener("savedEntry", event => {
    EntryListComponent()
})