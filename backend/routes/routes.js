const express = require('express');
const router = express.Router();

let experiences = [];
let idCounter = 1;

router.get('/', (req, res) => {
  console.log(experiences);
    res.json(experiences);
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const experience = experiences.find(exp => exp.id === id);
    if (experience) {
        res.json(experience);
    } else {
        res.status(404).json({ message: 'Experience not found' });
    }
});


router.post('/', (req, res) => {
    const { companyName, position, experience, date } = req.body;
    if (!companyName || !position || !experience || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newExperience = {
        id: idCounter++,
        companyName,
        position,
        experience,
        date
    };
    experiences.push(newExperience);
    res.status(201).json(newExperience);
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { companyName, position, experience, date } = req.body;
    const index = experiences.findIndex(exp => exp.id === id);
    if (index !== -1) {
        experiences[index] = { id, companyName, position, experience, date };
        res.json(experiences[index]);
    } else {
        res.status(404).json({ message: 'Experience not found' });
    }
});


router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const experience = experiences.find(exp => exp.id === id);
    if (experience) {
        Object.assign(experience, updates);
        res.json(experience);
    } else {
        res.status(404).json({ message: 'Experience not found' });
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = experiences.findIndex(exp => exp.id === id);
    if (index !== -1) {
        experiences.splice(index, 1);
        res.json({ message: 'Experience deleted successfully' });
    } else {
        res.status(404).json({ message: 'Experience not found' });
    }
});

module.exports = router;