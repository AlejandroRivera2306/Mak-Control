import mongoose from "mongoose";
const { Schema } = mongoose;

const rolSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  // Otros campos específicos de los roles
}, {
  timestamps: true
});

const Rol = mongoose.model('Rol', rolSchema);
export default Rol;