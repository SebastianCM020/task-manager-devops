const app = require('./app');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'dev';

app.listen(port, () => {
    console.log(`[${env.toUpperCase()}] Servidor corriendo en puerto ${port}`);
});