console.log('Hola mundo')

let i = 0

// Se va al event loop por ser una función asincrona
setInterval(function (){
  console.log(i)
  if (i === 5){
    // El hilo se rompe
    throw 'Error'
  }

  i++
}, 1000)

console.log('Esto se ejecuta')
