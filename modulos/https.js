const http = require('http')

http.createServer( router).listen(3000)

function router (req, res){
    console.log('Nueva petición')
    console.log(req.url)

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal')
            res.end()
            break
        default:
            res.write('No se lo que quieres')
            res.end()
    }

    res.writeHead(201, {
        'Content-Type': 'text/plain'
    })
    // res.write('Ya se usar http de nodejs')
}
