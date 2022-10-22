import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath (import.meta.url)
const __dirname = path.dirname (__filename)
const app = express()

app.use(express.static('public'))

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.get('/photo-gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen(3000, () => console.log('Server Started'))