# Task Manager - Proyecto Integrador DevOps + V&V

Sistema de gestión de tareas desarrollado como proyecto integrador para la asignatura de DevOps y Verificación y Validación.

## 1. Descripción del sistema
El **Task Manager** es una aplicación web que permite a los equipos de trabajo gestionar sus tareas diarias, facilitando la creación, edición, eliminación y seguimiento de estados (pendiente, en progreso, completado).

## 2. Arquitectura general
La aplicación utiliza un servidor **Node.js** con **Express**. El proyecto está estructurado para permitir despliegues rápidos y reproducibles, integrando prácticas de infraestructura como código (scripts bash) y pruebas automatizadas.

## 3. Gestión de ambientes
Se han definido tres ambientes para garantizar la estabilidad:
* **Dev**: Entorno de desarrollo local/Codespaces para nuevas funcionalidades.
* **Test**: Entorno para ejecución de pruebas automatizadas (`npm test`).
* **Producción**: Entorno final para despliegue (simulado mediante despliegue manual estructurado).

## 4. Flujo DevOps
El flujo está automatizado mediante **GitHub Actions** (`.github/workflows/ci.yml`), el cual ejecuta:
1. **Build**: Instalación automática de dependencias mediante `install.sh`.
2. **Pruebas**: Ejecución de la suite de pruebas unitarias y de integración con Jest/Supertest.

## 5. Estrategia de pruebas (V&V)
Se han implementado casos de prueba cubriendo:
* **Funcionales**: Creación y actualización correcta de estados.
* **Negativos**: Manejo de errores ante datos faltantes o estados inválidos.
* **De borde**: Validación de límites en las peticiones.

## 6. Proceso de despliegue (CD Conceptual)
Para desplegar el sistema en producción, siga estos pasos:
1. Asegurarse de que el pipeline de CI pase correctamente en `main`.
2. Realizar un pull de la versión estable en el servidor de destino.
3. Ejecutar `./install.sh` para preparar el entorno.
4. Iniciar el servicio con `./run.sh prod`.

## 7. Ejecución
Para iniciar el proyecto en tu entorno local:

```bash
# Dar permisos de ejecución
chmod +x instal.sh run.sh

# Instalar dependencias
./instal.sh

# Ejecutar
./run.sh dev
