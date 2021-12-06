require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
app.use(express.json()) 
app.use(express.urlencoded())
app.use(cors())  

const userRoutes = require('./src/routes/libro')

app.use('/api/libros', userRoutes)
 
app.listen(port, ()=>{
    console.log('Server is running on port' + port)
})

