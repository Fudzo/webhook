require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());


app.post('/megawebhook', (req, res) => {
    const event = req.body;
    console.log('Received event:', event);
    res.status(200).send();
});

app.get('/heartbeat', (req, res) => {
    res.json({ works: true })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});