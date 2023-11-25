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
        type: String,
        required: false,
        enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"," "],

    },

    prioridad:{
        type: String,
        required: true,
        enum: ["Saving", "Checking", "TC"],
    },

    tipodecierre:{
        type: String,
        required: false,
        enum: ["Monthly", "Quarterly"],
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


