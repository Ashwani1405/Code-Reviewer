const express = require("express");
const cors = require("cors");
const aiRoutes = require('./routes/ai.routes')

const app = express()

// Enable CORS for frontend requests
app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middleware for parsing JSON and urlencoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/ai', aiRoutes)

app.get('/', (req, res) => {
    res.send("Hello World!")
})

module.exports = app