import { 
	Route,
	Routes, 
	Navigate, 
	useLocation 
} from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
//import Preview from "./pages/Preview";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Notfound from "./pages/components/not-found";
import ProtectedRoutes from "./utils/ProtectedRoutes";


import "./App.css";

function App() {
	let location = useLocation();

	return (
		<div className="container">
			{location.pathname !== '/'&&<Header/>} 
				<Routes>
						<Route exact path="/" element={<Login/>}/>

						<Route element = {<ProtectedRoutes/>}>
							<Route exact path="/Home" element={<Home/>}/>
						</Route>
						
						{/* <Route
							exact
							path="/login"
							element={<Login/>}
						/> */}

						<Route path="*" element={<Notfound/>} />
				</Routes>
				{/* {location.pathname !== '/'&& location.pathname !== '/Home' && <Footer/>} */}
		</div>
	);
}

export default App;