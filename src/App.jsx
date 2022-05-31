import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('components/Layout'));
const HomePage = lazy(() => import('components/pages/HomePage'));
const SingleMoviePage = lazy(() => import('components/pages/SingleMoviePage'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies/:id" element={<SingleMoviePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
