import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.get('/weather/:city', async(req, res) => {
    const city = req.params.city;
    try{
        const geoResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);

        const { lat, lon } = geoResponse.data[0];
        console.log(lat, lon);

        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`);
        res.json(weatherResponse.data);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});