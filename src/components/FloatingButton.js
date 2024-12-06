import React from 'react';
import { createRoot } from 'react-dom/client';

const FloatingButton = () => {
  const handleClick = () => alert('Connect with All clicked!');

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#0073b1',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 10000,
      }}
    >
      Connect with All
    </button>
  );
};

// Render the button
const container = document.createElement('div');
container.id = 'linkedin-extension-root';
document.body.appendChild(container);

const root = createRoot(container);
root.render(<FloatingButton />);
