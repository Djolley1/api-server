'use strict';

const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.post('/', async (req, res) => {
  try {
    const { name, calories, isVegan } = req.body;
    const food = await Food.create({ name, calories, isVegan });
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (err){
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async(req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, calories, isVegan } = req.body;
    const food = await Food.findByPk(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    await food.update({ name, calories, isVegan });
    res.json(food);
  }catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    await food.destroy();
    res.json(food);
  }catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;