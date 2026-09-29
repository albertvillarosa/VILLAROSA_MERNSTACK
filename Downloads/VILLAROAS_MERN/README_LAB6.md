# VILLAROSA MERN - DCIT 26 Laboratory Exercise 6

This version updates the previous React project for Lab 6: Introducing Backend.

## Required stack
- React + Vite
- Express
- CORS
- Mongoose
- MongoDB / MongoDB Compass or Atlas
- `fetch()` + `useEffect()`

## Project flow
MongoDB -> Mongoose -> Express API -> React fetch/useEffect -> state -> map() -> UI

## Run
### Terminal 1 - backend
```bash
cd backend
npm install
```
Create `backend/.env`:
```env
MONGODB_URI=YOUR_MONGODB_URI
PORT=5000
```
Then:
```bash
npm run seed
npm start
```

### Terminal 2 - frontend
From `VILLAROAS_MERN`:
```bash
npm install
npm run dev
```

## API endpoints
- `GET /api/message`
- `GET /api/students`
- `GET /api/teachers`
- `POST /api/students`
- `POST /api/teachers`

The original JSON files remain in `src/data` as reference/seed source, but the running app reads students and teachers from MongoDB through the Express API.
