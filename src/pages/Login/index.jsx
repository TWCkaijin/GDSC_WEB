import "./login.css";
import { auth, provide,db } from "../../config/firebase";

import {signInWithPopup, signOut, signInWithCustomToken, onAuthStateChanged} from "firebase/auth";
import { useNavigate , Link} from "react-router-dom";
import { useEffect, useState} from "react";
import { doc, getDoc } from "firebase/firestore";
import axios from "axios";

function Login() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const googleAuth = async() => {
		setLoading(true);
		await signOut(auth);
		const result = await signInWithPopup(auth, provide);
		const user = result.user;

		const userAuthData = {
			uid: user.uid,
			displayName: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
		};
		localStorage.setItem("userAuthData", JSON.stringify(userAuthData));
		const userDocRef = doc(db, "UserProfile", user.uid);
        const userDoc = await getDoc(userDocRef);
		
		if (!userDoc.exists()) {
			try{
				createUserOnServer(userAuthData);
			}catch(e){
				console.error("Error creating  user data to Firestore: ", e);
			}
		}else{
			console.log("user exists");
		}
		setLoading(false);
		navigate("/Home");
	};
	

	const createUserOnServer = async (userData) => {
		setLoading(true);
		try {
			const response = await axios.post(`${import.meta.env.VITE_API_WEB_ENDPOINT}/api/createuser`, {
				userData:{
					uid: userData.uid,
					displayName: userData.displayName,
					email: userData.email,
					avatar: userData.photoURL,
				},
				webSecret: import.meta.env.VITE_API_WEB_SECRET,
			});
			console.log("User created on server:", response.data);
		} catch (error) {
			console.error("Error creating user on server:", error);
		}
		setLoading(false);
	};

	
	useEffect(() => {
		const storedUserData = localStorage.getItem("userAuthData");
		//依照localstorage存取的token直接登入//
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
							setLoading(false);
                            navigate("/Home");
                        })
                        .catch((error) => {
                            console.error("no custom token:");
							setLoading(false);
                        });
                }
            });
        }else{
			setLoading(false)
		}
	},[navigate])

	return (
		<div className="login-parent-container">
			{loading ? (
                <div className="loading-spinner">
                    {/* 這裡可以放置您的過場動畫，例如一個旋轉的圖標 */}
                    <div className="spinner"></div>
                </div>
            ) : (
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
					<button className="google_btn" onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
					<div className="login-other-option">
							<Link to="">
								<p className="login-other-option-button">admin login</p>
							</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default Login;
