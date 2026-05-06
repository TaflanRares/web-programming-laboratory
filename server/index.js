const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Project = require('./models/Project');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/dashboard')
    .then(function () {
        console.log('Connected to MongoDB!');
    })
    .catch(function (err) {
        console.error('Error connecting to MongoDB:', err);
    });

app.get('/api/projects', async function (req, res) {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Eroare ' + err });
    }
});

app.post('/api/projects', async function (req, res) {
    try {
        const newProject = new Project({
            title: req.body.title,
            tech: req.body.tech,
            done: req.body.done || false,
        });
        const saved = await newProject.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/project/:id', async function (req, res) {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ error: 'Project not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

app.delete('/api/projects/:id', async function (req, res) {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (project) {
            res.json({ message: 'Project deleted' });
        } else {
            res.status(404).json({ error: 'Project not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

/*
app.put('/api/projects/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);

    if (!project) {
        return res.status(404).json({ error: 'Not found' });
    }

    project.title = req.body.title ?? project.title;
    project.tech = req.body.tech ?? project.tech;
    project.description = req.body.description ?? project.description;
    project.done = req.body.done ?? project.done;

    res.json(project);
});

app.get('/api/projects/stats', function (req, res) {
    const total = projects.length;
    const done = projects.filter(p => p.done).length;
    const notDone = total - done;

    res.json({ total, done, notDone });
});
*/

// Prima ruta: raspunde la GET /
app.get('/', function (req, res) {
    res.json({ message: 'Serverul functioneaza!' });
});

// Porneste serverul
app.listen(PORT, function () {
    console.log('Server pornit pe http://localhost:' + PORT);
});