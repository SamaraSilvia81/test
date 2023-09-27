import React, { useState, useEffect } from 'react';
import { createUser, getUsers } from './api/user';

function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Carrega os usuários existentes quando o componente é montado
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const loadedUsers = await getUsers();
      setUsers(loadedUsers);
    } catch (error) {
      console.error('Erro ao buscar dados de usuários:', error);
      alert('Ocorreu um erro ao buscar dados de usuários. Tente novamente mais tarde.');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Chama a função createUser para criar um novo usuário
      await createUser({ name, password, email });
      alert('Usuário registrado com sucesso!');
      // Limpa os campos do formulário de registro após o registro bem-sucedido
      setName('');
      setEmail('');
      setPassword('');
      // Recarrega a lista de usuários para incluir o novo usuário
      loadUsers();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Ocorreu um erro ao criar o usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <div>
        <h2>Registrar</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="new-name">Nome de Usuário</label>
            <input
              type="text"
              id="new-name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="new-password">Nova Senha</label>
            <input
              type="password"
              id="new-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label htmlFor="new-password">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>

      <div>
        <h2>Lista de Usuários</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.objectID}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Login;