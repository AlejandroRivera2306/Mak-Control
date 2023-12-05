import mongoose from "mongoose";
const { Schema } = mongoose;

const actividadSchema = new Schema({

    nombre:{

        type: String,
        trim: true,
        required: true,
    },

    estado : {
        type: Boolean,
        default: false,
        enum: ["OK", "PD"],
    },
 
  
    fechaEntrega: {
        type: Date,
        required: false,
    },
    
}, {

    timestamps: true

});

const Actividad = mongoose.model("Actividad", actividadSchema );
export default Actividad;