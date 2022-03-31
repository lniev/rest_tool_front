import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Router from "./router/router";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Router />
		</div>
	);
}

export default App;
