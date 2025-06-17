import React from 'react';
import ToDoItem from './ToDoItem';

// ToDoList component that renders the list of tasks
function ToDoList({ tasks, onDelete, onToggle, onEdit, editingIndex, editingText, setEditingText, saveEdit, cancelEdit }) {
  // Show message when no tasks exist
  if (tasks.length === 0) {
    return <div style={{ color: '#185a9d', textAlign: 'center', marginTop: '30px', fontSize: '1.1rem', opacity: 0.8, fontWeight: 500 }}>No tasks yet!</div>;
  }

  return (
    // Container with fade-in animation
    <div style={{ animation: 'fadeInList 0.7s' }}>
      {/* Animation keyframes for list fade-in effect */}
      <style>{`
        @keyframes fadeInList {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Map through tasks and render ToDoItem for each */}
      {tasks.map((task, idx) => (
        <ToDoItem
          key={task.id} // Unique key for each task
          task={task}
          onDelete={() => onDelete(idx)}
          onToggle={() => onToggle(idx)}
          onEdit={() => onEdit(idx, task.text)}
          isEditing={editingIndex === idx}
          editingText={editingText}
          setEditingText={setEditingText}
          saveEdit={() => saveEdit(idx)}
          cancelEdit={cancelEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList; 