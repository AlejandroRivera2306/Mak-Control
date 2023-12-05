import express from 'express';
import mongoose from "mongoose";
import rolRoutes from '../routes/rolRoutes.js';

const app = express();
const conectarDB = async () => {

    try {
        const connection = await mongoose.connect( process.env.MONGO_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true 

        }
        );
        app.use(express.json());

        
        app.use('/api/roles', rolRoutes);

        const url = `${connection.connection.host} : ${connection.connection.port} `
        console.log(`Mongo db conectado en: ${url}` )
        
    } catch (error) {
        console.log( `error:  ${error.message}`);
        process.exit(1);

        
    }
};
 export default  conectarDB;