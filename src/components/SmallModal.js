import React from 'react';

function SmallModal({ children, onClose}) {
  return (
    <div style={styles.overlay}>

      <div style={styles.smallModal}>
        {children}
        <button style={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
}



const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  smallModal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '30%',
    maxWidth: '100%'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer'
  }
};

export default SmallModal;