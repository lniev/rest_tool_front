// router.js
import { Routes, Route, Link, Outlet,Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ReactApp = lazy(() => import('../page/reactApp/reactApp'));
const Home = lazy(() => import('../page/Home/home.page'));
const ToolsNav = lazy(() => import('../page/ToolsNav/toolsNav.page'));
const CodeRun = lazy(() => import('../page/CodeRun/CodeRun.page'));
export default function AppRoute() {
  const loading = <div>Loading...</div>;
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/home"></Navigate>

          }
        ></Route>
        <Route
          path="/home"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/toolsNav"
          element={
            <Suspense fallback={loading}>
              <ToolsNav />
            </Suspense>
          }
        />
        <Route
          path="/codeRun"
          element={
            <Suspense fallback={loading}>
              <CodeRun></CodeRun>
            </Suspense>
          }
        >
        </Route>
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
