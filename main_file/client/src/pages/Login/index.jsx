import styles from "./styles.module.css";
//import { useNavigate } from "react-router-dom";
function Login() {
	//const navigate = useNavigate();
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	
	return (
		<div className="login-page">
			<div className={styles.form_container}>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Members Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing in with Google</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
