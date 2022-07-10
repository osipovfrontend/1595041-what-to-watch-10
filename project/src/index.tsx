import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const defaultProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

root.render(
  <React.StrictMode>
    <App
      title={defaultProps.title}
      genre={defaultProps.genre}
      year={defaultProps.year}
    />
  </React.StrictMode>,
);
