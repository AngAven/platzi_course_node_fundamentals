async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola, ', nombre)
            resolve(nombre)
            //reject('trono')
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios, ', nombre)
            resolve(nombre)
        }, 1000)
    })
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla ....')
            resolve(nombre)
        }, 1000)
    })
}

async function main() {
    let nombre = await hola('Perenganito')
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('** End conversation')
}

console.log('** Start conversation')
main()
