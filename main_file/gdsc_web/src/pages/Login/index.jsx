import "./login.css";
//import { useNavigate } from "react-router-dom";
function Login() {
	//const navigate = useNavigate();
	const googleAuth = () => {
		window.open(
			`${REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	
	return (
		<div className="login-parent-container">
				<div className="form_container">
					<div className="heading">
						<img src="/images/GDSC.png" alt="GDSC img" />
						<div className="title">NSYSU GDSC</div>
						
						
					</div>
					<h1>{"< Member >"}</h1>
					<button className="google_btn" onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing in with Google</span>
					</button>
				</div>
		</div>
	);
}

export default Login;
