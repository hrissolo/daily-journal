/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const eventHub = document.querySelector("main")

export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
        <p>date: ${entry.date}    </p>
        <p>concept: ${entry.concept}</p>
        <p>entry: ${entry.entry}</p>
        <p>mood: ${entry.mood}</p>
        </section>
    `
}