const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const filteredNotes = notes.filter(function(note, index){
//     const isTitleMatching = note.title.toLowerCase().includes('ne')
//     const isBodyMatch = note.body.toLocaleLowerCase().includes('seat')
//     return isTitleMatching || isBodyMatch
// })
// console.log(filteredNotes)

const sortNotes = function (notes) {

    notes.sort( function( a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
          }
        else if  (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
          }
        else{
        return 0    
        }
    })
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
    
  }

sortNotes(notes)
console.log(notes)