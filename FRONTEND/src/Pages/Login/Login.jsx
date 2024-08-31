import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBackground from '../../assets/login.jpg';
import axios from 'axios';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isStudent, setIsStudent] = useState(true);
  const [isProfessor, setIsProfessor] = useState(false);
  const navigate = useNavigate();
  const handelClickStudent = () => {
    if (isStudent) return;
    else {
      setIsStudent(true);
      setIsProfessor(false);
    }
  }
  const handelClickProfessor = () => {
    if (isProfessor) return;
    else {
      setIsProfessor(true);
      setIsStudent(false);
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isStudent) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/student/login', {
          email,
          password
        });

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token); 
          navigate('/Student/Dashboard');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    }
    else if (isProfessor) {
      console.log("Professor");
      try {
        const response = await axios.post('http://localhost:3000/api/v1/professor/login', {
          email,
          password
        });

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token); 
          navigate('/Professor/Dashboard');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    }
    else {
      console.log("Role error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-animate"
      style={{ backgroundImage: `url(${loginBackground})` }}>
      <div className="text-white bg-transparent border-2 border-[rgba(255,255,255,.2)] backdrop-blur-3xl bg-opacity-30 p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center mb-4">Enter your email and password to sign in</p>

        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 font-semibold rounded-l-lg transition-colors duration-500 ease-in-out ${isStudent ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={handelClickStudent}
          >
            Student
          </button>
          <button
            className={`flex-1 py-2 font-semibold rounded-r-lg transition-colors duration-500 ease-in-out ${!isStudent ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={handelClickProfessor}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button type="submit" className="w-full py-3 mb-4 text-white bg-purple-500 rounded-lg hover:bg-purple-600">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
