// router.js
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from '../page/home/home.page';
import BaseLayout from '../layout/BaseLayout';

const ReactApp = lazy(() => import('../page/reactApp/reactApp'));
// const Home = lazy(() => import('../page/home/home.page'));
export default function AppRoute() {
  const loading = <div>Loading...</div>;
  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={
            // <Suspense fallback={loading}>
            //   <Home />
            // </Suspense>
            <div>/////</div>
          }
        ></Route> */}
        <Route path="/home" element={<Home />} />
        <Route
          path="/rp"
          element={
            <Suspense fallback={loading}>
              <ReactApp />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}
