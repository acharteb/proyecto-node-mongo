const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión exitosa....');
  } catch (error) {
    console.error('Error al intentar conectar a la BD:', error.message);
    process.exit(1);
  }
};
module.exports = connectDB;

