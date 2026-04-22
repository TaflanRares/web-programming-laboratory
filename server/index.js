const express = require('express');
const app = express();
const PORT = 3000;

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