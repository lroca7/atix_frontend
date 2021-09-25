import React from 'react';
import './Login.scss';
import logo from './images/logo.svg';

export default function Login() {
  return(
    <div className="login">
      <div className="login-wrapper">
        <div className="login-logo">
          <img className="logo" src={logo} alt="Atix" />
        </div>
        <div className="login-form">
        <form>
          <label className="label">Usuario</label>
          <input className='field' type="text" />
          <label className="label">Contrasena</label>
          <input className='field' type="password" />
          <div className='button-box'>
            <button className="btn-primary" type="submit">Ingresar</button>
            <button className="btn-secondary" type="submit">Cancelar</button>
          </div>
        </form>
        </div>
      </div>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#C12727" fill-opacity="1" d="M0,320L40,272C80,224,160,128,240,117.3C320,107,400,181,480,176C560,171,640,85,720,53.3C800,21,880,43,960,96C1040,149,1120,235,1200,250.7C1280,267,1360,213,1400,186.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
  </div>
  )
}