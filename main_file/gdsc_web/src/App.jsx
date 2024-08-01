import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Preview from "./pages/Preview";
import Header from "./pages/Preview/components/Header";
import Footer from "./pages/Preview/components/Footer";





import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	let location = useLocation();

	const getUser = async () => {
		try {
			const url = `${REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
			console.log("Get User Success!");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			{location.pathname !== '/login'&&<Header 
												clubName="GDSC"
												userAvatar={user ? user.picture : 'https://via.placeholder.com/40'}
												islogin={user ? true : false}
											/>}
				<Routes>
					<Route 
						exact
						path="/" 
						element={<Preview/>} 
					/>
					<Route
						exact
						path="/Home"
						element={user ? <Home user={user} /> : <Navigate to="/login" />}
					/>
					<Route
						exact
						path="/login"
						element={user ? <Navigate to="/Home" /> : <Login />}
					/>
					
				</Routes>
				{location.pathname !== '/login'&&<Footer/>}
		</div>
	);
}

export default App;