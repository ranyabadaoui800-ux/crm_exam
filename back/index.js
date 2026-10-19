const express = require('express');
const app = express();
const port = 4002
const dotenv = require('dotenv');
dotenv.config()

app.get('/',(req,res)=>{
    res.send('Hello from back');
});

app.listen(port,()=>{
    console.log("le serveur tourne dans le port "+ port);
});
const mongoose = require('mongoose');

async function connectDB() {
    try {
        const uri = process.env.MONGO_URI 
        if (!uri) {
            throw new Error('MONGO_URI / MONGODB_URI non définie dans le fichier .env');
        }
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}

connectDB();