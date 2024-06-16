import { API_URL } from '@utils/index';
import axios from 'axios';
import { useState } from 'react';


export default function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {

    event.preventDefault();

    axios.post(`${API_URL}/signin`, {
      username: username,
      password: password
    })
      .then(res => {
        if (res.status == 200) {

          console.log('Login successful');
        } else {
          setError('Invalid username or password');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-md rounded p-12">
        <h2 className="text-4xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-2xl font-bold mb-4"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-2xl font-bold mb-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-2xl font-bold mb-8">{error}</p>
          )}
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}