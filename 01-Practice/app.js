//Basic setup when it comes to events

const EventEmitter = require('events') // Import EventEmitter

const customEmitter = new EventEmitter() // Create new EventEmitter

customEmitter.on('response',(name,id)=>{ // Listen for response event) - on method
    console.log(`Response received ${name} with id ${id}`)
})

customEmitter.on('response',()=>{ // You can add as many events as you want. Order of these events matters
    console.log('Some other logic received')
})

customEmitter.emit('response','kaushik',38)// Emit response event - emit method

// If you listen to response after the emit then it would not work.