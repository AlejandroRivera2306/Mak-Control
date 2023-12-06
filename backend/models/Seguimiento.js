import mongoose from "mongoose";
const { Schema } = mongoose;

const SeguimientoSchema = new Schema({

    enero:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    febrero:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    marzo:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    abril:{
       type: String,
        required: true,
        enum: ["OK", "PD"],
    },
    
    mayo:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    junio:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    julio:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    agosto:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    septiembre:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    octubre:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    noviembre:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    diciembre:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    unknow_expenses:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    petty_cash:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    subcontractors:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    tax_planning:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    sale_tax:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    payroll:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    loans:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    confirmation_sharedHolder_dist:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },

    analizado:{
        type: String,
        required: true,
        enum: ["OK", "PD"],
    },
    
}, {

    timestamps: true

});

const Seguimiento = mongoose.model("Seguimiento", SeguimientoSchema );
export default Seguimiento;