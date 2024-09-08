
import { useNavigate , Link} from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import { getGoogleRedirectResult, auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Helmet } from "react-helmet";
import "./login.css";
import {useAuth} from "../../utils/authContext";

function Login() {
	const navigate = useNavigate();
	const {login} = useAuth();
	console.log("In login page");
	/* useEffect(() => {
		setLoading(true);
		const storedUserData = localStorage.getItem("userAuthData");
		if (storedUserData) {
			setLoading(true);
            console.log("try auto login");
            const parsedUserData = JSON.parse(storedUserData);
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    navigate("/Home");
                } else {
                    await signInWithCustomToken(auth, parsedUserData.token)
                        .then(() => {
							updateLoginTime();
							setLoading(false);
                            navigate("/Home");
                        })
                        .catch((error) => {
                            console.log("no custom token:");
							setLoading(false);
                        });
                }
            });
        }	
		setLoading(false)
	},[navigate])

	useEffect(() => {
        const checkRedirectResult = async () => {
			console.log("checkRedirectResult");
            setLoading(true);
            try {
				console.log("In try");
                const result = await getRedirectResult(auth);
				console.log("result",result);
                if (result?.user) {
                    handleUserData(result.user);
                }

            } catch (error) {
                console.error("Error retrieving redirect result:", error);
			}finally{
				setLoading(false);
			}
        };
		checkRedirectResult();

    }, [navigate]); */

	return (
		<div className="login-parent-container">
			<Helmet>
				<title>NSYSU GDSC - Login</title>
			</Helmet>
				<div className="form_container">
					<div className="login-backward">
						{/* <Link to="/">
							<div className="login-backward-button">
								<img src="/images/backward.png" alt="NSYSU img" />
								<h1>back</h1>
							</div>
						</Link> */}
						
					</div>
					<div className="heading">
						<img src="/images/GDSC.png" alt="GDSC img" />
						<div className="title">NSYSU GDSC</div>
					</div>
					<button className="google_btn" onClick={login}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
					{/* <div className="login-other-option">
							<Link to="">
								<p className="login-other-option-button">admin login</p>
							</Link>
					</div> */}
				</div>
		</div>
	);
}

export default Login;
