const express = require('express')

const responseHandlers = require('./utils/handleResponses')
const userRouter= require('./users/users.router')
const app = express()
const database= require('./utils/database')
const initModels= require('./models/initModels')
require('dotenv').config
app.use(express.json());


database.authenticate()
    .then(()=>{
        console.log("Database autenticate")
    })
    .catch((error)=>{
        console.log(error)
    })

database.sync()
.then(()=>{
    console.log("Database Ready")
})
.catch((error)=>{
    console.log(error)
})

initModels()

app.use('/api/v1', userRouter)

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations"
        }
    })
})

//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

app.listen(9000,() => {
    console.log('Server started at port 9000')
})