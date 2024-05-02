'use strict';

const express = require('express');
const router = express.Router();
const Clothes = require('../models/clothes');

// Route to add a record
router.post('/', async (req, res) => {
  try {
    const { brand, size, color } = req.body;
    const clothes = await Clothes.create({ brand, size, color });
    res.status(201).json(clothes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all records
router.get('/', async (req, res) => {
  try {
    const clothes = await Clothes.findAll();
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get one record
router.get('/:id', async (req, res) => {
  try {
    const clothes = await Clothes.findByPk(req.params.id);
    if (!clothes) {
      return res.status(404).json({ message: 'Clothes not found' });
    }
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update a record
router.put('/:id', async (req, res) => {
  try {
    const { brand, size, color } = req.body;
    const clothes = await Clothes.findByPk(req.params.id);
    if (!clothes) {
      return res.status(404).json({ message: 'Clothes not found' });
    }
    await clothes.update({ brand, size, color });
    res.json(clothes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a record
router.delete('/:id', async (req, res) => {
  try {
    const clothes = await Clothes.findByPk(req.params.id);
    if (!clothes) {
      return res.status(404).json({ message: 'Clothes not found' });
    }
    await clothes.destroy();
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
