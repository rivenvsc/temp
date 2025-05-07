import React, { useState } from 'react';

interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<'credentials' | 'google' | 'facebook' | 'register'>('credentials');

  const handleTabChange = (tab: 'credentials' | 'google' | 'facebook' | 'register') => {
    setActiveTab(tab);
  };

  const handleCredentialsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const usernameOrPhone = form.elements.namedItem('usernameOrPhone') as HTMLInputElement;
    const password = form.elements.namedItem('password') as HTMLInputElement;

    console.log('Credentials submitted:', {
      usernameOrPhone: usernameOrPhone.value,
      password: password.value,
    });

    // Here you would typically make an API call to authenticate the user
  };

  return (
    <div className="auth-form">
      <div className="tabs">
        <button
          className={activeTab === 'credentials' ? 'active' : ''}
          onClick={() => handleTabChange('credentials')}
        >
          Credentials
        </button>
        <button
          className={activeTab === 'google' ? 'active' : ''}
          onClick={() => handleTabChange('google')}
        >
          Google
        </button>
        <button
          className={activeTab === 'facebook' ? 'active' : ''}
          onClick={() => handleTabChange('facebook')}
        >
          Facebook
        </button>
        <button
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => handleTabChange('register')}
        >
            Register
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'credentials' && (
          <div className="credentials-form">
            <h2>Login with Credentials</h2>
            <form onSubmit={handleCredentialsSubmit}>
              <input type="text" name="usernameOrPhone" placeholder="Username or Phone" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit">
                Login
              </button>
            </form>
          </div>
        )}

        {activeTab === 'google' && (
          <div className="google-login">
            <h2>Login with Google</h2>
            <button>Login with Google</button>
          </div>
        )}

        {activeTab === 'facebook' && (
          <div className="facebook-login">
            <h2>Login with Facebook</h2>
            <button>Login with Facebook</button>
          </div>
        )}
        {activeTab === 'register' && (
          <div className="register-form">
            <h2>Register</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;