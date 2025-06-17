import React, { useState, useEffect } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import addIcon from './assets/add.png';

function App() {
  // State management for tasks, input field, and editing functionality
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tasks');
      if (stored) {
        const parsedTasks = JSON.parse(stored);
        // Validate that stored data is an array
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        } else {
          console.error('Stored tasks is not an array');
          setTasks([]);
        }
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
      setTasks([]);
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    try {
      if (tasks.length > 0) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        localStorage.removeItem('tasks');
      }
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

  // Add a new task to the list
  const addTask = e => {
    e.preventDefault();
    if (input.trim()) {
      const newTask = {
        id: Date.now(), // Generate unique ID for each task
        text: input.trim(), // Trim whitespace
        completed: false,
        createdAt: new Date().toISOString() // Add timestamp for sorting if needed
      };
      setTasks([newTask, ...tasks]);
      setInput('');
    }
  };

  // Delete a task from the list
  const deleteTask = idx => {
    setTasks(tasks.filter((_, i) => i !== idx));
    if (editingIndex === idx) {
      setEditingIndex(null);
      setEditingText('');
    }
  };

  // Toggle task completion status
  const toggleTask = idx => {
    setTasks(tasks.map((task, i) =>
      i === idx ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start editing a task
  const startEdit = (idx, text) => {
    setEditingIndex(idx);
    setEditingText(text);
  };

  // Save edited task
  const saveEdit = idx => {
    if (editingText.trim()) {
      setTasks(tasks.map((task, i) =>
        i === idx ? { ...task, text: editingText } : task
      ));
      setEditingIndex(null);
      setEditingText('');
    }
  };

  // Cancel task editing
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingText('');
  };

  // Main render
  return (
    // Main container with gradient background
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      fontFamily: 'system-ui, sans-serif',
      padding: 0,
      margin: 0,
      transition: 'background 0.5s',
    }}>
      {/* Center content container */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        {/* Main app container with gradient background */}
        <div style={{
          background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
          borderRadius: '22px',
          boxShadow: '0 4px 24px rgba(24,90,157,0.10)',
          maxWidth: 400,
          minWidth: 320,
          width: '100%',
          minHeight: 520,
          padding: '32px 18px 24px 18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Header animated />
          {/* Task input form */}
          <form onSubmit={addTask} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, position: 'relative' }}>
            <input
              className="todo-input"
              type="text"
              placeholder="Add a new task"
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ marginBottom: 0, paddingRight: '50px' }}
            />
            {/* Add task button */}
            <button className="add-btn" type="submit" title="Add Task" style={{ 
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              margin: 0,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderRadius: '50%'
            }}>
              <img src={addIcon} alt="Add" style={{ 
                width: 28, 
                height: 28, 
                pointerEvents: 'none',
                transition: 'transform 0.2s ease'
              }} />
            </button>
          </form>
          {/* Todo list container */}
          <div className="todo-container" style={{ width: '100%' }}>
            <ToDoList
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleTask}
              onEdit={startEdit}
              editingIndex={editingIndex}
              editingText={editingText}
              setEditingText={setEditingText}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
            />
          </div>
        </div>
      </div>
      {/* Styles */}
      <style>{`
        /* Responsive styles for mobile devices */
        @media (max-width: 500px) {
          .todo-container { width: 98vw !important; }
          .todo-input { width: 90vw !important; }
        }
        /* Remove focus outline from buttons */
        button {
          outline: none;
        }
        button:focus {
          outline: none;
        }
        /* Add button hover and click effects */
        .add-btn {
          transition: all 0.2s ease;
        }
        .add-btn:hover {
          transform: translateY(-50%) scale(1.15);
          background: rgba(67, 206, 162, 0.1);
        }
        .add-btn:active {
          transform: translateY(-50%) scale(0.95);
          background: rgba(67, 206, 162, 0.2);
        }
        .add-btn:hover img {
          transform: rotate(90deg);
        }
        /* Input field styles */
        .todo-input {
          width: 320px;
          padding: 16px 18px;
          border-radius: 16px;
          border: 1.5px solid #43cea2;
          margin-bottom: 18px;
          font-size: 1.1rem;
          outline: none;
          background: rgba(255,255,255,0.8);
          color: #222;
          transition: border 0.2s;
        }
        .todo-input:focus {
          border: 1.5px solid #11998e;
        }
        /* Todo list container styles */
        .todo-container {
          width: 100%;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
