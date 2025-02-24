import { renderNotes } from "./app.js";
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];
let showArchiveNotes = document.querySelector(".archive-notes-container");
showArchiveNotes.addEventListener("click", (event)=>{
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;
    switch(type){
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id})=> id.toString() !== noteId);
            showArchiveNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isachived})=> isachived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        case "archive":
            arrayOfNotes = arrayOfNotes.map(note => note.id.toString() === noteId ? {...note, isachived: !note.isachived} : note);
            showArchiveNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isachived})=> isachived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;

    }
})

showArchiveNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isachived})=> isachived));