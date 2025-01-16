import "./App.css";
import { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import { Header } from "~/components/Header";
import Home from "~/pages/Home/Home.jsx";

// Create Context
const MyContext = createContext();

function App() {
	// Initialize state
	const [countryList, setCountryList] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");

	// Call API
	useEffect(() => {
		getCountry("https://countriesnow.space/api/v0.1/countries/");
	}, []);

	// Process results returned from api
	const getCountry = async (url) => {
		const responsive = await axios.get(url).then((res) => {
			setCountryList(res.data.data);
			// console.log(res.data.data);
		});
	};

	// Values ​​passed down to child components
	const values = {
		countryList,
		selectedCountry,
		setSelectedCountry,
	};

	return (
		<>
			<BrowserRouter>
				<MyContext.Provider value={values}>
					<Header />
					<Routes>
						<Route path="/" exact element={<Home />} />
					</Routes>
				</MyContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;

export { MyContext };
