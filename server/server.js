const express = require('express')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const auth = require('./controllers/auth.controller')
const app = express()


app.use(express.json())
app.use(cookieparser())



app.use(cors({ origin: 'http://localhost:5173', credentials: true })) 


// use route endpoints here
app.use('/api/auth', auth)



app.get('/', (req, res) => {
    res.send('API is working')
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is Up!")
})
