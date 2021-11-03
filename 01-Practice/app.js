//Basic setup when it comes to events

const EventEmitter = require('events') // Import EventEmitter

const customEmitter = new EventEmitter() // Create new EventEmitter

customEmitter.on('response',()=>{ // Listen for response event) - on method
    console.log('Response received')
})

customEmitter.emit('response')// Emit response event - emit method