
import React, { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../App'
import { localSave } from '../utils/localStorage';
import verifyLogin from '../utils/verifyLogin';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () : Promise<void> => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      await localSave('AcessToken_QuickCMS', token);
      console.log(token);
      await verifyLogin()
    } catch (e) {
      setError('Failed to login');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginPage;
