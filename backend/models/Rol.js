




import mongoose from "mongoose";

const rolSchema = mongoose.Schema({


    nombrerol:{
        type: String,
        required: true,
        enum: ["Admin", "Audit", "Recon", "Analyst"],
    },

    empresa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empresa",
    },

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",

    },

}, {

    timestamps: true

});

const Rol = mongoose.model("Rol", rolSchema );
export default Rol;


