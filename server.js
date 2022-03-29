import express from 'express';
const app = express()

const PORT = process.env.PORT || 9999
app.get('/',(req,res) => {
    res.send('Hello world')
})

app.get('/api/user',(req,res) => {
    res.json({ admin: "Hwang" })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})