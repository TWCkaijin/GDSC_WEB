import "./login.css";
import { auth, provide } from "../../config/firebase";
import {signInWithPopup, signOut} from "firebase/auth";
import { useNavigate , Link} from "react-router-dom";

function Login() {
	const navigate = useNavigate();

	const googleAuth = async() => {
		await signOut(auth);
		const result = await signInWithPopup(auth, provide);
		console.log(auth);
		navigate("/");
	};
	
	return (
		<div className="login-parent-container">
				<div className="form_container">
					<div className="login-backward">
						<Link to="/">
							<div className="login-backward-button">
								<img src="/images/backward.png" alt="NSYSU img" />
								<h1>back</h1>
							</div>
						</Link>
						
					</div>
					<div className="heading">
						<img src="/images/GDSC.png" alt="GDSC img" />
						<div className="title">NSYSU GDSC</div>
					</div>
					<button className="google_btn" onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing in with Google</span>
					</button>
					<div className="login-other-option">
							<Link to="">
								<p className="login-other-option-button">admin login</p>
							</Link>
					</div>
				</div>
		</div>
	);
}

export default Login;
