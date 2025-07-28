import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMsg('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    setErrorMsg('');
    console.log('Registering user:', formData);
    // Add registration logic or API call here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create a SmartFace Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMsg && (
            <div className="bg-red-100 text-red-700 p-3 rounded">{errorMsg}</div>
          )}
          <div>
            <label htmlFor="fullName" className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-6 text-sm">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
