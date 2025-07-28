import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic
    if (email === '' || password === '') {
      setErrorMsg('Email and password are required.');
    } else {
      setErrorMsg('');
      console.log('Logging in with', { email, password });
      // Perform API call or redirect here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          SmartFace Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {errorMsg && (
            <div className="bg-red-100 text-red-700 p-3 rounded">{errorMsg}</div>
          )}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-6 text-sm">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
