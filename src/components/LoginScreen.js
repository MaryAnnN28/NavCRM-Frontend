import React from 'react'; 
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div>
   

      <section class="login-background" role="img" aria-label="sky-sunset-gradient">
        
        <div className="logo-container">
          <img className="logo-login-page" src="https://i.imgur.com/LT4Qy6L.png?1" alt="logo-login-page" /></div>
        {/* For Header/Text on LoginScreen */}

        <div className="login-card">
          <div className="login-form">
            <input type="email" className="email-input" placeholder="name@email.com"></input>

          </div>

        </div>

        <p className="login-screen-text"></p>




      </section>

    </div>
  )
}

export default LoginScreen; 