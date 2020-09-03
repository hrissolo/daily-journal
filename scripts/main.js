import { getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { EntryListComponent } from "./JournalEntryList.js"

const allTheEntries = getEntries();
console.log("all the entries", allTheEntries)

getEntries();
EntryListComponent();