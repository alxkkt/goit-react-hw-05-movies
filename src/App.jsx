import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('components/Layout'));
const HomePage = lazy(() => import('components/pages/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('components/pages/MovieDetailsPage'),
);
const MoviesPage = lazy(() => import('components/pages/MoviesPage'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
