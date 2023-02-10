const os = require('os')

console.log('arch >', os.arch())
console.log('\n')
console.log('platform >', os.platform())
console.log('\n')
console.log('cpus >', os.cpus())
console.log('\n')
console.log('constants >', os.constants)

console.log('****************************')
const SIZE = 1024
let kb = bytes => bytes / SIZE
let mb = bytes => kb(bytes) / SIZE
let gb = bytes => mb(bytes) / SIZE

console.log('freemem >', os.freemem())
console.log('totalmem >', os.totalmem())
console.log('kb >', kb(os.freemem()))
console.log('mb >', mb(os.freemem()))
console.log('gb >', gb(os.freemem()))
console.log('****************************')
console.log('\n')
console.log('****************************')
console.log('homedir > ' ,os.homedir())
console.log('****************************')


