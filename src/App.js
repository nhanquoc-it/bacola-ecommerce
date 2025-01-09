import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "~/components/Header";
import Home from "~/pages/Home/Home.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" exact element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
