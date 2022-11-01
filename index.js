const express = require("express")
const app = express()

const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users', require("./routers/users"))
app.use('/api/auth', require("./routers/auth"))

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT: ${PORT}`)
})