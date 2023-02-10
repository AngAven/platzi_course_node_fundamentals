function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola, ', nombre)
            resolve(nombre)
            //reject('trono')
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios, ', nombre)
            resolve(nombre)
        }, 1000)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla ....')
            resolve(nombre)
        }, 1000)
    })
}

console.log('Iniciando conversacion')
hola('Rick')
.then(hablar)
.then(hablar)
.then(adios)
.catch(error => {
    console.error('Se chingó')
})
