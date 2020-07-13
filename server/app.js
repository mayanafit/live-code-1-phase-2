require('dotenv').config()
const cors = require('cors')
const express = require('express')
const errorHandler = require(`./middlewares/errorHandler`)
const routes = require(`./routes`)
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)
app.use(errorHandler)

app.listen(port, () => console.log(`Your secure is our priority >> http://localhost:${port}`))