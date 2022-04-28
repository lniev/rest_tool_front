import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
const Calendar = lazy(() => import('../pages/Calendar/Calendar'));
const CodeRun = lazy(() => import('../pages/CodeRun/CodeRun'));

const Router = () => {
  const location = useLocation();
  console.log('location', location);
  return (
    <Routes>
      <Route path="/" element={<div>index child react-app</div>} />
      <Route
        path="/calendar"
        element={
          <Suspense fallback={<></>}>
            <Calendar />
          </Suspense>
        }
      />
      <Route
        path="/codeRun"
        element={
          <Suspense fallback={<></>}>
            <CodeRun />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
