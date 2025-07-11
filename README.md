# To-Do List Application

A modern, responsive To-Do List application built with React and Vite. This application allows users to manage their tasks with features like adding, editing, completing, and deleting tasks. The app includes smooth animations, a beautiful UI, and persistent storage using localStorage.

## Features
- Modern and responsive design
- Mobile-friendly interface
- Add, edit, delete, and mark tasks as complete
- Persistent storage using localStorage

## Github Repository link
`https://github.com/indrakhichaki-16/To-do-application`

## Installations
Before running the application, make sure you have the following installed:
- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)

## Running the Application
To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` by default.

## Project Structure
```
src/
─ assets/         # Contains images and icons
─ App.jsx         # Main application component
─ Header.jsx      # Header component with animations
─ ToDoList.jsx    # Component for rendering the list of tasks
─ ToDoItem.jsx    # Component for individual todo items
─ main.jsx        # Application entry point
─ index.css       # Global styles
```

## Technologies Used
- React
- Vite
- CSS (with animations)
- LocalStorage for data persistence

## Features in Detail
1. **Task Management**
   - Add new tasks
   - Edit existing tasks
   - Delete tasks
   - Mark tasks as complete/incomplete by clicking on the to-do item
2. **Data Persistence**
   - Tasks are automatically saved to localStorage
   - Data persists between page refreshes
