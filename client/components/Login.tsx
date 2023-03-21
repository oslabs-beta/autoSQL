import React, {FC, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';
// const Heading = ({title}: {title: string}) => <h2>{title}</h2>;

const Login: React.FC<{}> = () => {
  const {email, setEmail, password, setPassword} = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //TODO: Add fetch request to validate login.
    console.log('EMAIL IN LOGIN', email);
    setEmail('');
    setPassword('');
  };

  //Sign-up Route
  const routeToSignUp = (e: any) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="formLine">
          <label className="login-text" htmlFor="email">
            Email
            <input
              id="email"
              className="user-input"
              type="text"
              required
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formLine">
          <label className="login-text" htmlFor="password">
            Password
            <input
              className="user-input"
              type="password"
              required
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <div className="login-footer">
        Don&apos;t have an Account?{' '}
        <button type="button" onClick={routeToSignUp}>
          Sign up here!
        </button>
      </div>
    </>
  );
};

export default Login;