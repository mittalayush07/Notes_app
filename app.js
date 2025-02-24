export const renderNotes = (notes) => {
    let newNote = notes.map(({id, note, title, ispinned, isarchived}) => {
        return (
            `<div class="single-note shadow">
               <div class="d-flex align-center title-container">
                  <span class="single-note-title">${title}</span>
                  <button class="button del-btn v-hidden" data-type="del" data-id=${id}> 
                    <span data-id=${id} data-type="del" class="material-icons-outlined">
                        delete
                    </span>
                  </button>
                </div>
                <p>${note}</p>
                <div class="options d-flex gap-md">
                    <button data-id=${id} class="button btn pinned-btn v-hidden " data-type="pinned">
                        <span data-id=${id} data-type="pinned" class="material-icons-outlined">
                            push_pin
                        </span>                        
                    </button>
                    <button data-id=${id} class="button btn pinned-btn v-hidden" data-type="archive">
                        <span data-id=${id} data-type="archive" class="material-icons-outlined">
                            archive
                        </span>                    
                    </button>                    
                </div> 
            </div>`   
        )
    });
    newNote = newNote.join("");
    return newNote;
}
