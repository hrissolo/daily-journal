/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
        date: ${entry.date}    
        concept: ${entry.concept}
        entry: ${entry.entry}
        mood: ${entry.mood}
        </section>
    `
}