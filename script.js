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
