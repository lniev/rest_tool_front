import { lazy, Suspense } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
const Calendar = lazy(() => import("../pages/Calendar/Calendar"));

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<div>index child react-app</div>}></Route>
			<Route
				path="/calendar"
				element={
					<Suspense fallback={<></>}>
						<Calendar />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default Router;
