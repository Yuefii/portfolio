import React from 'react'

const spinnerStyle = {
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  borderTop: '4px solid #3498db',
  width: '40px',
  height: '40px',
  animation: 'spin 1s linear infinite'
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}

const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const Loading = () => (
  <div style={containerStyle}>
    <div style={spinnerStyle}></div>
    <style>{keyframes}</style>
  </div>
)

export default Loading
