let sum = 0

console.time('bucle')
for (let i = 0; i < 10000; i++){
    sum += 1
}

console.time('Async')
console.log('Empieza Async')
asyncFunction().then(() => {
    console.timeEnd('Async')
})

function asyncFunction(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Termina Async')
            resolve()
        }, 1000)
    })
}

console.timeEnd('bucle')
