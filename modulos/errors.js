function itBrokes() {
    console.group('itBrokes')
    console.log('It will be broken')
    return 3 + z
    console.groupEnd('itBrokes')
}

function otherFunction() {
    console.group('otherFunction')
    itBrokes()
    console.groupEnd('otherFunction')
}

function itBrokesAsync(cb){
    setTimeout(() =>{
        try{
            return 3 + z
        }catch (e) {
            console.group('async-error')
            console.log('Error inside async funtion')
            cb(e)
            console.groupEnd('async-error')
        }
    })
}

console.log('Start fail function\n')

try {
    itBrokesAsync((e) => {
        console.log('cb error')
        console.log(e)
    })
} catch (e) {
    console.group('catch')
    console.log('* Capturamos el error')
    console.error(e)
    console.groupEnd('catch')
}
