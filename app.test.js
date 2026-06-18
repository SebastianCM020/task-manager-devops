const request = require('supertest');
const app = require('./app');

describe('API Task Manager - Pruebas Funcionales y Negativas', () => {
  // Caso de Prueba Funcional
  it('Debe crear una nueva tarea (Pendiente por defecto)', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Aprender DevOps' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual('pendiente');
  });

  // Caso de Prueba de Borde/Negativo
  it('Debe fallar al crear una tarea sin título', async () => {
    const res = await request(app).post('/tasks').send({ status: 'en progreso' });
    expect(res.statusCode).toEqual(400);
  });

  // Caso Funcional - Edición de Estado
  it('Debe actualizar el estado de la tarea a completado', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Tarea Prueba' });
    const taskId = res.body.id;
    const updateRes = await request(app).put(`/tasks/${taskId}`).send({ status: 'completado' });
    expect(updateRes.statusCode).toEqual(200);
    expect(updateRes.body.status).toEqual('completado');
  });

  // Caso Negativo - Estado Inválido
  it('Debe rechazar un estado inválido', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Tarea Prueba 2' });
    const taskId = res.body.id;
    const updateRes = await request(app).put(`/tasks/${taskId}`).send({ status: 'cancelado' });
    expect(updateRes.statusCode).toEqual(400);
  });
});