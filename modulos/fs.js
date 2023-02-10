const fs = require('fs')
const NOMBRE_ARCHIVO = 'archivo.txt'
async function escribir(ruta, contenido, cb){
    console.log('* Writing')
    await fs.writeFile(ruta, contenido, (err) => {
        if (err){
            console.error('Hubo un error al escribir', err)
        } else {
            // console.log('Se escribió correctamente')
        }
    })
}
async function leer(ruta, cb){
    console.log('* Reading')
    await fs.readFile(ruta, (err, data) => {
        if (err){
            console.error('Hubo un error')
        }
        console.log('\n* Content *')
        console.log(data.toString())
        console.log('* Content *\n')
    })
}
async function borrar(ruta, cb){
    console.log('* Deleting')
    await fs.unlink(ruta, (err) => {
        if (err){
            console.error(err)
        }
    })
}
async function probarCreacionArchivo(){
    let rutaArchivo = `${__dirname}/${NOMBRE_ARCHIVO}`
    let contenido = 'Soy un archivo nuevo \nde varias \nlíneas'

    await escribir(rutaArchivo, contenido)
    await leer(rutaArchivo)
    await borrar(rutaArchivo, console.log)
}

probarCreacionArchivo()
