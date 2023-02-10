const {exec, spawn} = require('child_process')

// Ejecuta un archivo de JavaScript, podemos traer la respuesta de esa ejecución
/*exec('node ../conceptos/entorno.js', (err, stdout, sterr) => {
    if (err) {
        console.log(err)
        return false
    }
    console.log(stdout)
})*/

console.log('\n')
console.log('-------- Ejecuta un proceso con spawn -------------')
let proceso = spawn('ls', ['-lah'])

proceso.on('exit', function () {
    console.log('*** Proceso termino ***')
    console.log('\n')
})

console.log('Conected > ',proceso.connected)
console.log('PID > ', proceso.pid)
console.log('\n')

proceso.stdout.on('data', function (data){
    console.log('Killed > ' ,proceso.killed)
    console.log(data.toString())
    console.log('\n')
})

