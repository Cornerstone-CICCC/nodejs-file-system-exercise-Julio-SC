import http from 'http'// Check the README.md file for instructions to the exercise
import fs from 'fs'
import path from 'path'

const directory = "images"
const filePath = path.join(__dirname, directory)
const server = http.createServer((req, res) =>{
    const { url, method } = req



    if (url === "/view-image" && method === "GET") {
        fs.readFile(`${filePath}/veryhappydog.jpg`, (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("Error reading file!")
            return
          }
          res.writeHead(200, { "Content-Type": "image/jpeg" })
            res.end(data)
        })
    return
}
})
    const PORT = 3000
    server.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    } )
