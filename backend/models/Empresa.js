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

    email: {
        type: String,
        trim: true,
        required: true,
    },

    city: {
        type: String,
        trim: true,
        required: true,
    },
    state: {
        type: String,
        trim: true,
        required: true,
    },
  
    zip: {
        type: String,
        trim: true,
        required: true,
    },

    numbercomp: {
        type: String,
        trim: true,
        required: true,
    },

    website: {
        type: String,
        trim: true,
        required: true,
    },
    closetax: {
        type: String,
        trim: true,
        required: true,
    },

    contactname: {
        type: String,
        trim: true,
        required: true,
    },
    whois: {
        type: String,
        trim: true,
        required: true,
    },

    contactnumber: {
        type: String,
        trim: true,
        required: true,
    },

    emailcontact: {
        type: String,
        trim: true,
        required: true,
    },

    payrollcontact: {
        type: String,
        trim: true,
        required: true,
    },
    ein: {
        type: String,
        trim: true,
        required: true,
    },
    ssn: {
        type: String,
        trim: true,
        required: true,
    },

    incometax: {
        type: String,
        trim: true,
        required: true,
    },

    accounting:{

        type: String,
        trim: true,
        required: true,

    },

    txplanning:{

        type: String,
        trim: true,
        required: true,

    },
    saletax:{

        type: String,
        trim: true,
        required: true,

    },
    payroll:{

        type: String,
        trim: true,
        required: true,

    },
    contract:{

        type: String,
        trim: true,
        required: true,
    },




    empleados: [
        {
          nombre: String,
          cargo: String,
          porcentaje: Number
        }
      ],


    //   banksets: [
    //     {
    //       accountNumber: String,
    //       bankName: String,
    //       bankInfo: String,
    //       accountType:String
    //     }
    //   ],

    creador: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usuario",
    },

    tareas: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tarea",

        }
    ],

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