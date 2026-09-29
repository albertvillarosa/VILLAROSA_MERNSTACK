# DCIT 26 Laboratory Exercise 6 - Backend Setup

## 1. Install frontend dependencies
From `VILLAROAS_MERN`:
```bash
npm install
```

## 2. Install backend dependencies
```bash
cd backend
npm install
```

## 3. Configure MongoDB
Create a MongoDB database using MongoDB Atlas or MongoDB Compass. Copy your connection URI.

Create `backend/.env`:
```env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=5000
```
For local MongoDB you can use:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/student_management
PORT=5000
```

## 4. Seed the original JSON data into MongoDB
Inside `backend`:
```bash
npm run seed
```
This creates the Student and Teacher collections and inserts the records from the original JSON files.

## 5. Start backend
Still inside `backend`:
```bash
npm start
```
Expected:
`Backend running at http://localhost:5000`

## 6. Test API
Open:
- http://localhost:5000/api/message
- http://localhost:5000/api/students
- http://localhost:5000/api/teachers

## 7. Start React frontend
Open another terminal at `VILLAROAS_MERN`:
```bash
npm run dev
```

## Lab 6 data flow
MongoDB -> Mongoose models -> Express API -> fetch() -> useEffect() -> React state -> map() -> Student/Teacher UI
