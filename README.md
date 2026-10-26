# REST API Lab: Rick & Morty

Este es mi laboratorio de consumo de APIs REST. Partí de un boilerplate que traía un ejemplo de gestión de hoteles (arquitectura de "pods": scene / container / hook / mapper / vm / api) y lo adapté para consumir la [Rick and Morty API](https://rickandmortyapi.com/).

## Stack

- React + TypeScript + Vite
- Material UI + Formik
- `fetch` nativo para las llamadas HTTP (elegí no usar Axios)
- Servidor mock local con [Hono](https://hono.dev/) (`server/`)

## Cómo correr el proyecto

```bash
npm install
npm run start
```

Esto levanta a la vez:

- el frontend en `http://localhost:8080`
- el servidor mock local en `http://localhost:3000`

Vite tiene un proxy configurado (`vite.config.ts`) que redirige cualquier petición `/api/*` del frontend al servidor local, así que en el código del frontend uso siempre rutas relativas.

## Estructura

- `src/pods/character-collection`: lista de personajes.
- `src/pods/character`: detalle de un personaje.
- `src/scenes`: páginas que registran cada pod en el router (`/characters`, `/characters/:id`).
- `server/`: servidor mock con los endpoints `GET /api/character`, `GET /api/character/:id` y `PUT /api/character/:id`.

## Qué fui haciendo

### Renombrado del boilerplate

El punto de partida (`laboratory`) traía un ejemplo de hoteles. Renombré escenas, rutas y pods de `hotel`/`hotel-collection` a `character`/`character-collection`, manteniendo el mismo patrón de arquitectura (component / container / hook / mapper / vm / api por pantalla).

### Ejercicio 1: Lista y detalle de personajes

- En `character-collection` traigo la lista de personajes desde `https://rickandmortyapi.com/api/character` usando `fetch`.
- Al hacer click en una card navego a `/characters/:id`, donde `character` hace una segunda llamada (`GET /api/character/:id`) para mostrar el detalle.
- Cada pod tiene su propio `api-model` (la forma cruda que devuelve la API), `vm` (la forma que necesita la UI) y `mapper` (traduce entre ambos). Así, si cambia la API, no tengo que tocar los componentes.

### Ejercicio 2: Escrituras contra servidor local

- Cambié los endpoints del frontend de la API real a rutas relativas (`/api/character`), que el proxy de Vite redirige al servidor local en `server/`.
- El servidor mock expone los mismos personajes, más un campo extra: `bestSentence`.
- En el detalle del personaje, dejé todos los campos de solo lectura excepto `bestSentence`, que puedo editar y guardar con un `PUT` real al servidor local.

### Opcional: Paginación

> Esta parte vive en la rama `paginacion`, no en `main`.

- Poblé el servidor local con 100 personajes reales (los traje de la API pública) para tener datos suficientes como para que la paginación tuviera sentido.
- `GET /api/character` ahora acepta un query param `?page=`, devuelve 20 personajes por página y el total de páginas (`info.pages`).
- La lista de personajes tiene botones "Previous"/"Next" para navegar entre páginas, deshabilitados en los extremos.

## Lo que me falta

- Búsqueda de personajes.
- Componentes para lugares y episodios.
