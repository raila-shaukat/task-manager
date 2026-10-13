# Task Manager

A simple full stack Task Manager web app built from scratch. Users can add, view, complete and delete tasks. All data is stored in MongoDB.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)

## Features

- Create a task
- View all tasks
- Mark a task as done / undo
- Delete a task

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/tasks | Create a new task |
| GET | /api/tasks | Get all tasks |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Project Structure

```
task-manager/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## How to Run

1. Clone the repository
```
   git clone https://github.com/raila-shaukat/task-manager.git
   cd task-manager
```
2. Install dependencies
```
   npm install
```
3. Create a `.env` file in the root folder with:
```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
```

4. Start the server
```
   npm run dev
```
5. Open http://localhost:5000 in your browser

## Author

Raila Shaukat
