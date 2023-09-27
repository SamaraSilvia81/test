import React from 'react';
import './App.css';
import Login from './login'; // Importe o componente Login

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação</h1>
      <Login /> {/* Renderize o componente de login */}
    </div>
  );
}

export default App;