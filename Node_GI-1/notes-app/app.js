// //fs has to be defined 
// const fs = require('fs'); //for core just the name module in this case fs
// fs.writeFileSync('notes.txt', 'My name is Morgan.'); 
// //first paramater is the name of the file 
// //second argument is the contents going into the file 
// //read the docs nodejs.org 
// fs.appendFileSync('notes.txt', ' More information from the node.js file'); 

//requiring other files 
//each file has their own scope so you have to explicitly share
// const add = require('./utils.js'); 

const notes = require( './notes.js')
const chalk = require('chalk/index.js')
const yargs = require('yargs')

//Customize yargs version
yargs.version('1.1.0')

//Create add command 
//add note 
yargs.command({
    command: 'add', 
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note body', 
            demandOption: true, 
            type: 'string'
        },
    }, 
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command 
yargs.command({
    command: 'remove', 
    describe: 'Remove a note', 
    builder: {
        title:{
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//create list command 
yargs.command({
    command:'list', 
    describe: 'List your notes', 
    handler() {
        notes.listNotes()
    }
})

//create read command 
yargs.command({
    command:'read', 
    describe: 'Read a note', 
    buiilder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


//create edit command 
yargs.command({
    command: 'edit',
    describe: 'Edit an existing note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 
         body: {
            describe: 'New note body', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.editNote(argv.title, argv.body)
    }
})


yargs.parse()
