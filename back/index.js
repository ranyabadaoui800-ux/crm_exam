

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();

app.use(cors());

app.use(express.json());



const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI manquant dans le fichier .env");
    }

    await mongoose.connect(MONGO_URI);

    console.log("✅ Connexion MongoDB réussie !");
}


async function startServer() {
    try {
        await connectDB();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`🚀 Serveur lancé sur le port ${PORT}`);
            console.log(`🌐 http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Erreur :", error.message);
        process.exit(1);
    }
}

startServer();