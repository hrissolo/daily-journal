import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
/*
	A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector("#main");
const contentTarget = document.querySelector(".main");


eventHub.addEventListener("click", clickEvent => {
	if(clickEvent.target.id === "recordJournal"){

		const noteContent = document.querySelector(".entries")

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
            <textarea></textarea>     
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
        <button class="recordJournal" onclick="">record journal :)</button>           
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
