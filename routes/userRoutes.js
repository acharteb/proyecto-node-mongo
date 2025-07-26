const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users); 
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los Registros' });
  }
});
router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      nombre: req.body.nombre,
      correo: req.body.correo,
      edad: req.body.edad
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el registro: ' + error.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el registro: ' + error.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario: ' + error.message });
  }
});
module.exports = router;

