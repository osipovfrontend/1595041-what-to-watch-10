import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import PlayerPage from '../../pages/player-page/player-page';
import SignIn from '../../pages/sign-in/sign-in';
import { Films } from '../../types/film';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string,
  genre: string,
  year: number,
  poster: string,
  films: Films,
}

function App({ title, genre, year, poster, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Main title={title} genre={genre} year={year} poster={poster} films={films}/>}
        />
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Film}
          element={<MoviePage films={films} />}
        />
        <Route
          path={AppRoutes.AddReview}
          element={<MoviePageReviews />}
        />
        <Route
          path={AppRoutes.Player}
          element={<PlayerPage films={films} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
