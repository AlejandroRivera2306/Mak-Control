import mongoose from "mongoose";


const empresaSchema = mongoose.Schema({

    nombre: {
        type: String,
        trim: true,
        required: true,

    },

    descripcion: {
        type: String,
        trim: true,
        required: true,
    },

    fechaEntrega: {

        type: Date,
        default: Date.now(),
    },

    cliente: {
        type: String,
        trim: true,
        required: true,
    },

    creador: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usuario",
    },

    colaboradores : [

        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        } 

    ]
    
},
{

    timestamps: true, 
}
);

const Empresa = mongoose.model("Empresa", empresaSchema );
export default Empresa;