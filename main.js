import { renderNotes } from "./app.js";

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteBtn = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");
let pinTitle = document.querySelector("pin-title");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

notesDisplay.addEventListener("click", (event)=>{
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;
    switch(type){
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id})=> id.toString() !== noteId);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned, isachived})=> !ispinned && !isachived));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned})=> ispinned));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        case "pinned":
            arrayOfNotes = arrayOfNotes.map(note => note.id.toString() === noteId ? {...note, ispinned: !note.ispinned} : note);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned, isachived})=> !ispinned && !isachived));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned})=> ispinned));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        case "archive":
            arrayOfNotes = arrayOfNotes.map(note => note.id.toString() === noteId ? {...note, isachived: !note.isachived} : note);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned, isachived})=> !ispinned && !isachived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes)); 
    }
})

addNoteBtn.addEventListener("click", ()=>{
    if(note.value.trim().length > 0 || title.value.trim().length > 0){
        arrayOfNotes = [...arrayOfNotes, {id: Date.now(), title: title.value.trim(), note: note.value.trim(), ispinned: false, isachived: false}];
        note.value = title.value = "";
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned, isachived})=> !ispinned && !isachived));
        localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
    }
})
showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned, isachived})=> !ispinned && !isachived));
showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ispinned})=> ispinned));