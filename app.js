// Usando objeto express
const express = require('express')
// App de express 
const app = express()
// Indicamos que usaremos un JSON
app.use(express.json())
// Puerto en que abriremos nuestra app: localhost:3000
const port = 3000

//routes
// METHODS HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) => {
    console.log(`API explorers GET v1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "edu"}
    const explorer2 = { id: 2, name: "Edu2"}
    const explorer3 = { id: 3, name: "edu3"}
    const explorer4 = { id: 4, name: "Edu4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    //HTTP Status Code: 200
    res.status(200).json(explorers)
})

// Inicializando la App y depues consultar localhost:3000/v1/explorers
//para verificar que la app esta corriendo correctamente en el navegador o terminal comando curl +URL
// 
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})