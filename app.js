const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];
let idCounter = 1;

// Obtener tareas
app.get('/tasks', (req, res) => res.json(tasks));

// Crear tarea
app.post('/tasks', (req, res) => {
    const { title, status = 'pendiente' } = req.body;
    if (!title) return res.status(400).json({ error: 'Título es requerido' });
    const newTask = { id: idCounter++, title, status };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Editar tarea
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    const { title, status } = req.body;
    if (title) task.title = title;
    if (status) {
        if (!['pendiente', 'en progreso', 'completado'].includes(status)) {
            return res.status(400).json({ error: 'Estado inválido' });
        }
        task.status = status;
    }
    res.json(task);
});

// Eliminar tarea
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = app;