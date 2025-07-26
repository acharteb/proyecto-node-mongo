// Servidor Principal de la Aplicación
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const app = express();
connectDB();
app.use(express.json()); 
app.use('/api/users', userRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

