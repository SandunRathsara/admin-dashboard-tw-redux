import React from 'react';
import TextBox from '../../components/TextBox';
import Logo from '../../components/Logo';
// import { useAuth } from "./loginSlice";
export default function Login() {
  // const {authState, login} = useAuth()
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="w-full h-full flex justify-center items-center bg-blue-800">
      <div className="p-10 rounded shadow-xl bg-white flex flex-col items-center">
        <Logo fill="#1E40AF" height={100} />
        <div className="w-96 mt-10">
          <TextBox
            label="Username"
            placeholder="Username"
            onChange={event => setUsername(event.target.value)}
            value={username}
          />
          <TextBox
            label="Password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
            type="password"
          />
        </div>
      </div>
    </div>
  );
}
