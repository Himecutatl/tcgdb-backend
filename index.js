const express = require("express")
const app = express()
const PORT = 3000
const cors = require('cors')

require('./db/connnection')
const cardRoutes = require('./routes/routes')

app.use(express.json())
app.use(cors())

app.use('/', cardRoutes)

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})