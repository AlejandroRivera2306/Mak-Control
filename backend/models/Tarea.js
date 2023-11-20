import mongoose from "mongoose";

const tareaSchema = mongoose.Schema({

    nombre:{

        type: String,
        trim: true,
        required: true,
    },

    descripcion:{

        type: String,
        trim: true,
        required: true,
    },


    estado : {
        type: Boolean,
        default: false,


    },
 
    fechaEntrega: {
        type: Date,
        required: true,
        default: Date.now()

    },

    prioridad:{
        type: String,
        required: true,
        enum: ["Saving", "Checking"],
    },

    infobank:{
        type: String,
        required: true,
        enum: ["Banking Online", "Customer Sends"],
    },

    empresa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empresa",
    },

    completado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",

    },

}, {

    timestamps: true

});

const Tarea = mongoose.model("Tarea", tareaSchema );
export default Tarea;


