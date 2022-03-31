// router.js
import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const ReactApp = lazy(() => import('../page/reactApp/reactApp'));
const Home = lazy(() => import('../page/home/home.page'));
export default function AppRoute() {
  const loading = <div>Loading...</div>;
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={loading}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/rp"
          element={
            <Suspense fallback={loading}>
              <ReactApp />
            </Suspense>
          }
        />
      </Routes>
      <Link to="/">home</Link>
      <Link to="/rp">rp</Link>
    </div>
  );
}
