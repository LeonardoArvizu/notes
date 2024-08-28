import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { NotesProvider } from './provider/notesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotesProvider>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => <Route key={index} path={route.path} element={route.page} />)}
      </Routes>
    </BrowserRouter>
  </NotesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
