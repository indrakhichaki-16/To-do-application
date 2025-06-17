import React from 'react';
import trashIcon from './assets/trash.png';
import saveIcon from './assets/save.png';
import cancelIcon from './assets/cancel.png';

// ToDoItem component for rendering individual todo items
function ToDoItem({ task, onDelete, onToggle, onEdit, isEditing, editingText, setEditingText, saveEdit, cancelEdit }) {
  // Render edit mode if the item is being edited
  if (isEditing) {
    return (
      // Edit mode container
      <div
        style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '14px',
          padding: '16px 18px',
          margin: '12px 0',
          fontSize: '1.15rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(24,90,157,0.07)',
          minWidth: 0,
        }}
        className="todo-item-card"
      >
        {/* Edit input field */}
        <input
          value={editingText}
          onChange={e => setEditingText(e.target.value)}
          style={{
            flex: 1,
            fontSize: '1.1rem',
            border: '1.5px solid #43cea2',
            borderRadius: '8px',
            padding: '8px 10px',
            marginRight: 10,
            outline: 'none',
            background: '#f8ffae',
            color: '#185a9d',
            minWidth: 0,
            maxWidth: '100%',
          }}
          autoFocus
          onKeyDown={e => {
            if (e.key === 'Enter') saveEdit();
            if (e.key === 'Escape') cancelEdit();
          }}
        />
        {/* Save button */}
        <button
          onClick={saveEdit}
          style={{
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            padding: '4px 1px',
            fontSize: '1.2em',
            cursor: 'pointer',
            marginRight: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.18s, transform 0.18s',
            width: 32,
            height: 32,
          }}
          title="Save"
          className="save-btn"
        >
          <img src={saveIcon} alt="Save" style={{ width: 22, height: 22, pointerEvents: 'none' }} />
        </button>
        {/* Cancel button */}
        <button
          onClick={cancelEdit}
          style={{
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            padding: '4px 1px',
            fontSize: '1.2em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.18s, transform 0.18s',
            width: 32,
            height: 32,
          }}
          title="Cancel"
          className="cancel-btn"
        >
          <img src={cancelIcon} alt="Cancel" style={{ width: 22, height: 22, pointerEvents: 'none' }} />
        </button>
        {/* Hover effects for edit mode buttons */}
        <style>{`
          .save-btn:hover {
            background: #43cea222;
            transform: scale(1.15);
          }
          .cancel-btn:hover {
            background: #ff4d4f22;
            transform: scale(1.15);
          }
        `}</style>
      </div>
    );
  }

  // Render normal mode (not editing)
  return (
    // Todo item container
    <div
      style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '14px',
        padding: '16px 18px',
        margin: '12px 0',
        fontSize: '1.15rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(24,90,157,0.07)',
        transition: 'transform 0.18s, box-shadow 0.18s, opacity 0.18s',
        opacity: task.completed ? 0.7 : 1,
      }}
      className="todo-item-card"
      onClick={onToggle}
    >
      {/* Task text and completion status */}
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {task.completed && (
          <span style={{ color: '#43cea2', fontSize: '1.3em', marginRight: 6, textDecoration: 'none' }}>✔</span>
        )}
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      </span>
      {/* Action buttons container */}
      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {/* Edit button */}
        <button
          onClick={e => { e.stopPropagation(); onEdit(); }}
          style={{
            background: 'none',
            color: '#185a9d',
            border: 'none',
            borderRadius: '50%',
            padding: '4px 1px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.2em',
            marginRight: 2,
            transition: 'background 0.18s, color 0.18s, transform 0.18s',
          }}
          className="edit-btn"
          title="Edit"
        >
          <span role="img" aria-label="edit">✏️</span>
        </button>
        {/* Delete button */}
        <button
          onClick={e => { e.stopPropagation(); onDelete(); }}
          style={{
            background: 'none',
            border: 'none',
            borderRadius: '50%',
            padding: '4px 1px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '6px',
            fontSize: '1.2em',
            transition: 'background 0.18s, color 0.18s, transform 0.18s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="delete-btn"
          title="Delete"
        >
          <img src={trashIcon} alt="Delete" style={{ width: 22, height: 22, pointerEvents: 'none' }} />
        </button>
      </span>
      {/* Hover effects for normal mode */}
      <style>{`
        .todo-item-card:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 16px rgba(24,90,157,0.13);
        }
        .delete-btn:hover {
          background: #ff4d4f22;
          color: #d90429;
          transform: scale(1.2);
        }
        .edit-btn:hover {
          background: #43cea222;
          color: #11998e;
          transform: scale(1.15);
        }
      `}</style>
    </div>
  );
}

export default ToDoItem; 