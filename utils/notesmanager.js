// Chargement des libs externes
const fs = require('fs')
const chalk = require('chalk')

// lister tous les notes enregistré
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse('Notes :'))
    notes.forEach( (note) => {
        console.log(note.title)}
    )
}

// ajouter une note (titre + contenu)
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note ajouté!'))
    }else{
        console.log(chalk.red.inverse('Entrée existante!'))
    }
    
}
// lire une note spécifique
const readNote = (title) =>{
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if(noteToRead){
        console.log(chalk.green(noteToRead.title)+' ' + noteToRead.body)
    }
    else{
        console.log(chalk.red.inverse('Note introuvable!'))
    }

}

// supprimer une note en se basant sur le titre
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse('Note supprimée !'))
    }else
    {
        console.log(chalk.red.inverse('Note introuvable !'))
    }
    saveNotes(notesToKeep)
}

// enregister l'entrée dans le fichier JSON
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./data/notes.json',dataJSON)
}

// chargement du contenu JSON
const loadNotes = () => {
    try
    {
        const dataBuffer = fs.readFileSync('./data/notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
   
}
// export
module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
} 