import express from 'express'

const app = express()
const port = 5050

app.listen(port, () => console.log(`Server runing at: http://localhost:${port}`))
