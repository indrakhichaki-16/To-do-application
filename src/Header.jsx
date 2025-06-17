// Import necessary dependencies
import React from 'react';

// Header component with optional animation
function Header({ animated }) {
  return (
    // Header container with white background and shadow
    <div
      style={{
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(24,90,157,0.10)',
        padding: '20px 24px 18px 20px',
        marginBottom: '32px',
        maxWidth: 340,
        width: '100%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* Animation styles */}
      <style>{`
        /* Fade and slide down animation for title */
        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-30px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Infinite bounce animation for title */
        @keyframes bounceInfinite {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-8px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-6px); }
          80% { transform: translateY(0); }
        }
        /* Apply animations to title if animated prop is true */
        .header-title-animated {
          animation: fadeSlideDown 1.1s cubic-bezier(.68,-0.55,.27,1.55) 0.1s both, bounceInfinite 1.6s 1.2s infinite;
        }
        /* Fade in animation for description */
        @keyframes fadeInBright {
          0% { opacity: 0.1; filter: brightness(0.7); }
          100% { opacity: 1; filter: brightness(1); }
        }
        /* Apply fade in animation to description if animated prop is true */
        .desc-animated {
          animation: fadeInBright 1.7s 0.7s both;
        }
      `}</style>
      {/* Title with gradient text */}
      <div
        className={animated ? 'header-title-animated' : ''}
        style={{
          fontSize: '2.1rem',
          fontWeight: 700,
          letterSpacing: '1.5px',
          background: 'linear-gradient(90deg, #43cea2, #185a9d, #f7971e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Poppins, system-ui, sans-serif',
          marginBottom: 8,
          userSelect: 'none',
        }}
      >
        TO DO LIST
      </div>
      {/* Description text */}
      <div className={animated ? 'desc-animated' : ''} style={{ color: '#185a9d', fontSize: '1.01rem', opacity: 0.85, fontWeight: 500, letterSpacing: 0.2, fontFamily: 'Poppins, system-ui, sans-serif' }}>
        Stay organized. Get things done.
      </div>
    </div>
  );
}

export default Header;