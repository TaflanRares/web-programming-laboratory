const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(express.json());
app.use(cors());

const projects = [
    {
        "id": 0,
        "title": "Personal Website",
        "tech": "HTML, CSS, JS",
        "description": "Personal portfolio page with React",
        "done": true
    },
    {
        "id": 1,
        "title": "Ohm's Gate",
        "tech": "Unreal Engine, C++",
        "description": "Virtual reality educational circuits simulation",
        "done": false
    },
    {
        "id": 2,
        "title": "Lingua Astra",
        "tech": "Unreal Engine, C++",
        "description": "Retro-inspired puzzle game set in a mysterious space station",
        "done": true
    },
    {
        "id": 3,
        "title": "Regolith Red",
        "tech": "Godot, GDScript",
        "description": "Classic strategy game set on Mars",
        "done": true
    }
];

app.post('/api/projects', function (req, res) {
    const newProject = {
        id: projects.length + 1,
        title: req.body.title,
        tech: req.body.tech,
        description: req.body.description,
        done: req.body.done || false,
    };
    projects.push(newProject);
    res.status(201).json(newProject);
});

app.get('/api/projects', function (req, res) {
    res.json(projects);
});

app.get('/api/project/:id', function (req, res) {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ error: 'Project not found' });
    }
});

app.delete('/api/projects/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const index = projects.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }

    projects.splice(index, 1);
    res.json({ message: 'Deleted' });
});

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

// Prima ruta: raspunde la GET /
app.get('/', function (req, res) {
    res.json({ message: 'Serverul functioneaza!' });
});

// Porneste serverul
app.listen(PORT, function () {
    console.log('Server pornit pe http://localhost:' + PORT);
});