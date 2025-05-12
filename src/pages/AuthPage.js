import React, { useState } from 'react';
import Login from './Login';
import RegisterPage from './RegisterPage';

const AuthPage = ({ setCurrentUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button 
          className={isLogin ? 'active' : ''} 
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button 
          className={!isLogin ? 'active' : ''} 
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      {isLogin 
        ? <Login setCurrentUser={setCurrentUser} /> 
        : <RegisterPage setCurrentUser={setCurrentUser} />
      }
    </div>
  );
};

export default AuthPage;
