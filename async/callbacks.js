function hola(nombre, cb){
  setTimeout(() => {
    console.log('[1] Hola, ', nombre)
    cb(nombre)
  }, 1000)
}

function adios(nombre, cb){
  setTimeout(() => {
    console.log('[2] Adios, ', nombre)
    cb()
  }, 1000)
}

console.log('---- Inicio ----')

hola( 'Pepito',(nombre) => {
  adios(nombre, () => {
    console.log('Terminando proceso que se fue al event loop')
  })
})

console.log('---- Fin ---- ')

