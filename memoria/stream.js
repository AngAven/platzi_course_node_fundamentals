const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''
let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8')
readableStream.on('data', chunk => {
    data += chunk
})
readableStream.on('end', () => {
    // console.log(data)
})

// process.stdout.write('hola')
// process.stdout.write('hola1')
// process.stdout.write('hola2')


const Transform = stream.Transform;

function Mayus() {
    Transform.call(this)
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function(chunk, codify, cb){
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readableStream
.pipe(mayus)
.pipe(process.stdout)