import { useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { EntryListComponent } from "./JournalEntryList.js"

const allTheEntries = useJournalEntries();
console.log("all the entries", allTheEntries)

useJournalEntries();
EntryListComponent();