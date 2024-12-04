import React from 'react';
import './App.css';
import Login from './login';

function App() {
  console.log('App component loaded'); // เพิ่มข้อความ debug
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

