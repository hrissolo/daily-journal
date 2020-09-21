import { getEntries, useJournalEntries, saveEntry } from "./JournalDataProvider.js";

/*
	A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector("main");
const contentTarget = document.querySelector(".mainContent");


eventHub.addEventListener("click", clickEvent => {
	if(clickEvent.target.id === "recordJournal"){
        const entryDate = document.querySelector("#journalDate")
        const entryConcept = document.querySelector("#conceptsText")
        const entryEntry = document.querySelector("#textarea")
        const entryMood =  document.querySelector("#mood")

        
            const newEntry = {
                date: entryDate.value,
                concept: entryConcept.value,
                entry: entryEntry.value,
                mood: entryMood.value
            }

            saveEntry(newEntry)
            // render()
	}
})


const render = () => {
    contentTarget.innerHTML = `
    <section class="form">
    <form action="">
        <fieldset>
            <label for="journalDate">date of entry</label>
            <input type="date" name="journalDate" id="journalDate">          
        </fieldset>
        <fieldset>
            <label for="conceptsText">concepts covered</label>
            <input type="concept" name="conceptsText" id="conceptsText">         
        </fieldset>
        <fieldset>
            <label for="entryText">journal entry</label>
            <textarea id="textarea"></textarea>     
        </fieldset>
        <fieldset>                  
            <label for="mood">mood</label>
            <select id="mood" name="mood">
                <option value="null"> - - - </option>
                <option value="confident">confident</option>
                <option value="prepared">prepared</option>
                <option value="excited">excited</option>
                <option value="stuck">stuck</option>
                <option value="confused">totally confused</option>
            </select>                    
        </fieldset>            
        <button id="recordJournal" type="button">record journal :)</button>           
    </form>
</section>
    `
}



export const JournalFormComponent = () => {
    getEntries()
    .then(() => {
        render(useJournalEntries())
    }
    )
}
