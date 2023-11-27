
import express  from "express";
import dotenv from "dotenv";
import cors from 'cors'
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js';
import empresaRoutes from './routes/empresaRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';
import rolRoutes from './routes/rolRoutes.js';



const app = express ();
app.use(express.json());
dotenv.config();
conectarDB();
//configurar cors
const whitelist = [process.env.FRONTEND_URL]
const corsOptions = {

    origin: function (origin, callback) {

        if ( whitelist.includes(origin)){
            callback( null , true)

        }else {

            callback(new Error( " error cors") )

        }
    }


}

app.use(cors(corsOptions))

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/empresas", empresaRoutes);
app.use("/api/evaluaciones", usuarioRoutes);
app.use("/api/tareas", tareaRoutes);
app.use("/api/rol", rolRoutes);



const PORT = process.env.PORT || 4000; 

app.listen (PORT, () => {
    console.log(app._router.stack.filter(route => route.route).map(route => route.route.path));
console.log(`Servidor corriendo en el puerto 4000 ${PORT}`)
});

