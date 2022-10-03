const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/home',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})

app.get('aboutus',(req,res)=>{
    res.send('<h1>AboutUs Page</h1>')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))