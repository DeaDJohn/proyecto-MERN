const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    console.log(process.env.DB_MONGO);
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada')
    } catch (error){
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;