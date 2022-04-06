// router.js
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import BaseLayout from '../layout/BaseLayout';

const ReactApp = lazy(() => import('../page/reactApp/reactApp'));
const Home = lazy(() => import('../page/home/home.page'));
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
        <Route
          path="/home"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/rp"
          element={
            <Suspense fallback={loading}>
              {/*<ReactApp>*/}
                <Outlet></Outlet>
              {/*</ReactApp>*/}
            </Suspense>
          }
        >
          <Route path="/rp/*" element={<ReactApp></ReactApp>} />
        </Route>
      </Routes>
    </div>
  );
}
