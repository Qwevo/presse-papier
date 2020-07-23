// Chargement des libs externes
const yargs = require('yargs')
const notes = require('./utils/notesmanager')

// Création de la commande Ajout
yargs.command({
    command: 'ajout',
    describe: 'Ajouter une note',
    builder: {
        title: {
            describe: 'Description',
            // rendre le champ obligatoire dans le terminal
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Contenu',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Création de la commande suppression
yargs.command({
    command: 'supprimer',
    describe: 'Supprimer une note',
    builder: {
        title: {
            describe: 'Description',
            // rendre le champ obligatoire dans le terminal
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Création de la commande lister
yargs.command({
    command: 'lister',
    describe: 'Lister tous les notes',
    handler() {
        notes.listNotes()
    }
})

// Création de la commande lire
yargs.command({
    command: 'lire',
    describe: 'Lire une note spécifique',
    builder: {
        title: {
            describe: 'Description',
            // rendre le champ obligatoire dans le terminal
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()