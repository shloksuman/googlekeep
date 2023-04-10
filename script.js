const addtitle = document.getElementById('addtitle');
const addtext = document.getElementById('addtext');
const addnotebutton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
// let notes = [] ;
// localStorage.setItem('notes' , JSON.stringify(notes)) ;

// console.log(addnotebutton);
// console.log(addtext);

showNotes();

function addNotes(){

    //local storage
    let notes = localStorage.getItem('notes') ;
    if(notes == null){
        notes = [] ;
    }
    else {
        notes = JSON.parse(notes) ; //string notes is converted into array
    }


    // const title = addtitle.value ;
    // const note = addtext.value;
    if(addtext.value == ''){
        alert('Add your note')
        return ;
    }

    
    

    const notesObj = {
        title : addtitle.value  ,
        text : addtext.value , 
    }
    notes.push(notesObj);

    addtitle.value = "";
    addtext.value = "";

    //update the storage
    localStorage.setItem('notes' , JSON.stringify(notes));
    showNotes();
}

function showNotes() {
    let notesHTML = '' ;
    let notes = localStorage.getItem('notes') ;
    if(notes === null){
        return ;
    } else {
        notes = JSON.parse(notes);
    }
    for(let i=0; i< notes.length ; i++){
        notesHTML += `<div class="note">
        <button class="deletenote" id=${i} onclick="deleteNote(${i})" >Delete</button>
        <div class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</div>
        <div class="text">${notes[i].text}</div>
    </div>
        `
    }

    notesDiv.innerHTML = notesHTML ;
}

function deleteNote(ind){
    let notes = localStorage.getItem('notes') ;
    if(notes === null){
        return ;
    } else {
        notes = JSON.parse(notes);
    }

    notes.splice(ind , 1);
    localStorage.setItem('notes', JSON.stringify(notes)) ;
    showNotes();
}

addnotebutton.addEventListener('click' , addNotes);
