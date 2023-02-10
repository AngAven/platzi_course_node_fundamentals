function hola(nombre, cbHola){
  setTimeout(() => {
    console.log('Hola, ', nombre)
    cbHola(nombre)
  }, 1000)
}

function adios(nombre, cbAdios){
  setTimeout(() => {
    console.log('Adios, ', nombre)
    cbAdios()
  }, 1000)
}

function hablar(cbHablar){
  setTimeout(() => {
    console.log('Bla bla bla ....')
    cbHablar()
  }, 1000)
}

// callback hell
// hola( 'Pepito',(nombre) => {
//   hablar(() => {
//     hablar(() => {
//       adios(nombre, () => {
//         console.log('Conversación terminada')
//       })
//     })
//   })
// })

function conversacion(nombre, veces, cbConversacion){
  if (veces > 0){
    hablar(() => {
      conversacion(nombre, --veces, cbConversacion)
    })
  } else {
    adios(nombre, cbConversacion)
  }
}

hola('Carlos', (nombre) => {
  conversacion(nombre, 10 , () => {
    console.log('Terminamos')
  })
})
