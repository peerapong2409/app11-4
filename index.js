const http = require('http')
const fs = require('fs')

http.createServer(render).listen(3000)
console.log('Server started on port:3000')


function render(require, response) {
    let url = require.url
    url = (url.endsWith('/')) ? url : url + '/'
    let fileName ='html/' //ไฟล์เก็บอยู่ในโฟลเดอร์ html
    switch(url) {
        case '/':fileName+='index.html';break
        case '/about.html/':fileName+='about.html';break
        case '/products.html/':fileName+='products.html';break
    }

    fs.readFile(fileName, (error, content) => {
        let ctype = {'Content-Type': 'text/html'}
        if(!error) {
            response.writeHead(200, ctype)
            response.write(content)
        }else {
            response.writeHead(404, ctype)
            response.write(error.message)

        }
        return response.end()
    })
}
