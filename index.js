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

const setViberWebhook = async () => {
    try {
        const response = await axios.post('https://chatapi.viber.com/pa/set_webhook', {
            url: process.env.WEBHOOK_URL,  // Replace with your public URL
            auth_token: process.env.VIBER_BOT_TOKEN
        });
        console.log('Webhook set:', response.data);
    } catch (error) {
        console.error('Error setting webhook:', error);
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    setViberWebhook();
});