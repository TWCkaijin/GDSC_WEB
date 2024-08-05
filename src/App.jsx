import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Preview from "./pages/Preview";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import ProtectedRoutes from "./utils/ProtectedRoutes";


import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	let location = useLocation();
	/* const getUser = async () => {
		try {
			const url = `${REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
			console.log("Get User Success!");
		} catch (err) {
			console.log(err);
		}
	}; */
	
	

	return (
		<div className="container">
			{location.pathname !== '/login'&&<Header/>}
				<Routes>
					<Route 
						exact
						path="/" 
						element={<Preview/>} 
					/>

					<Route element = {<ProtectedRoutes/>}>
						<Route
							exact
							path="/Home"
							element={<Home/>}
						/>
					</Route>
					
					<Route
						exact
						path="/login"
						element={<Login/>}
					/>
					
				</Routes>
				{location.pathname !== '/Login'&& location.pathname !== '/Home' && <Footer/>}
		</div>
	);
}

export default App;