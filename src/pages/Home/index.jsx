import { auth } from "../../config/firebase"
import { useNavigate } from "react-router-dom";

import "./home.css"

const Home = () => {	
	const navigate = useNavigate();
	const logout = async () => {
		await auth.signOut();
		navigate("/");
	};

	const getUserData = async () => {
		const user = auth?.currentUser;
		if (user) {
			console.log("User is signed in");
		};
	};


	return (
		<div>
			<ul class="breadcrumb" id="breadcrumb">
				This is bread crumb placeholder
			</ul>
			<div class="main_box-list">
				<div class="main_box">
					<img src="https://via.placeholder.com/40" alt="action"/>
					<p>Club form</p>
				</div>
				<div class="main_box" href="#box">
					<img src="https://via.placeholder.com/40" alt="action"/>
					<p>User Profile</p>
				</div>
				<div class="cutline"></div>
				<div class="main_box" href="#box">
					<img src="https://via.placeholder.com/40" alt="action"/>
					<p>secbox</p>
				</div>
				<div class="cutline"></div>
				<div class="main_box" href="#payment">
					<div class="member-status-title" >
						<h1>成員狀態</h1>
					</div>
					<div className="member-status-content">會員: {"PH"}</div>
					<div className="member-status-sheet">
						<div className="member-status-first-column">
							<div className="member-status-content">會員: {"PH"}</div>
							<div className="member-status-content">會員: {"PH"}</div>
						</div>
						<div className="member-status-second-column">
							<div className="member-status-content">會員: {"PH"}</div>
							<div className="member-status-content">會員: {"PH"}</div>
						</div>
					</div>
				</div>
			</div>
			<button class="floating-button" id="_signin_floatingButton">+</button>
		</div>
	);
}

export default Home;
