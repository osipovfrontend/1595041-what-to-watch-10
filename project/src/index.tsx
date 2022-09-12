import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const defaultProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  poster: 'img/bg-the-grand-budapest-hotel.jpg',
  films: films
};

root.render(
  <React.StrictMode>
    <App
      title={defaultProps.title}
      genre={defaultProps.genre}
      year={defaultProps.year}
      poster={defaultProps.poster}
      films={films}
    />
  </React.StrictMode>,
);
