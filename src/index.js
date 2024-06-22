import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cartprovider } from './Context/Cartcontext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Cartprovider >
    <App />
  </Cartprovider >
);


