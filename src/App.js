import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './features/Home';
import {ClaimList} from './features/ClaimList';
import {Users} from './features/Users';
import AppContainer from './components/AppContainer';
import Login from './features/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/login'} element={<Login />} />
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="claim-list" element={<ClaimList />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
