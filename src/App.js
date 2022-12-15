import React, { useContext } from 'react';
import Content from './useContext/content';
import ThemeProvider, { ThemeContext } from './useContext/ThemeContext';
import './useContext/useContext.css';

//1. Create context
//2. Provider
//3. Consumer

function App() {
  const contextTheme = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <button onClick={contextTheme.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeProvider>

  )
}

export default App;
