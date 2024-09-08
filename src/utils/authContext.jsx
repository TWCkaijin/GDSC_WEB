import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, provide, db , signInWithGooglePopup, signInWithGoogleRedirect, getGoogleRedirectResult } from "../config/firebase";
import { signOut, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import Loading from "../pages/components/Loading";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./authContext.css";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
    const [loginState, setLoginState] = useState(false);


    const login = async() => {
        setLoading(true);
        await signOut(auth);
        if(isMobile){
            await loginWithRedirect();
        }else{
            await loginWithPopup();
        }
        setLoading(false);
    }

	const loginWithPopup = async() => {
		try{
            await signInWithGooglePopup(auth, provide);
            console.log("result",auth);
			await handleUserData(auth.currentUser);
		}catch(e){
			console.error("Error signing in with Popup: ", e);
			setLoading(false);
		}
	};
	

    const loginWithRedirect = async() => {
        try{
            await signInWithGoogleRedirect(auth, provide);
        }catch(e){
            console.error("Error signing in with Redirect: ", e);
            setLoading(false);
        }
    }

	const handleUserData = async (user) => {
		const userDocRef = doc(db, "UserProfile", user.uid);
		const userDoc = await getDoc(userDocRef);
		const userAuthData = {
			uid: user.uid,
			displayName: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
		};
		if (!userDoc.exists()) {
			try{
				await createUserOnServer(userAuthData);
			}catch(e){
				console.error("Error creating  user data to Firestore: ", e);
			}
		}else{
			console.log("user exists");
		}

		
        localStorage.setItem("userAuthData", JSON.stringify(userAuthData));
        updateLoginTime();
        await getUserProfile();
	}

	const createUserOnServer = async (userData) => {
		const userCreateRequest = {
			userData:{
				uid: userData.uid,
				displayName: userData.displayName,
				email: userData.email,
				avatar: userData.photoURL,
			},
			webSecret: import.meta.env.VITE_API_WEB_SECRET,
		}
		try {
			const response = await axios.post(`${import.meta.env.VITE_API_WEB_ENDPOINT}/createuser`, userCreateRequest);
			Swal.fire({
				position: "center",
				icon: "success",
				title: "New user created successfully",
				showConfirmButton: false,
				timer: 1500,
				width: "20rem",
			})
			console.log("User created on server:");
		} catch (error) {
			console.error("Error creating user on server:", error);
		}
	};

	const updateLoginTime = async () => {
		const userDocRef = doc(db, "UserProfile", auth.currentUser.uid);
		await updateDoc(userDocRef, {
			LastLogin: new Date(),
		});
	}

    const getUserProfile = async () => {
        try{
            const userDocRef = doc(db, "UserProfile", auth?.currentUser.uid);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                setUserData(userDoc.data());
                console.log("User data loaded successfully");
            } else {
                console.error("User not found in Firestore");
            }
        }catch(e){
            console.error("Error getting user data from Firestore: ", e);
        }
    };

    const logout = async() => {
        await signOut(auth);
        localStorage.removeItem("userAuthData");
        setUserData(null);
        setLoginState(false);
        navigate("/");
    }

    useEffect(() => { // onAuthStateChanged
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setLoading(false);
            if (user) {
                setLoginState(true);
                handleUserData(user);
                navigate("/Home");
            } else {
                setUserData(null);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => { // auto login
        const storedUserData = localStorage.getItem("userAuthData");
		if (storedUserData!=null) {
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
    }, []);

    useEffect(() => {  // checkRedirectResult
        const checkAuthState = async () => {
            setLoading(true);
            try {
                const result = await getGoogleRedirectResult(auth);
                if (result?.user) {
                    setLoginState(true);
                    handleUserData(result.user);
                } else {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            console.log("User found via onAuthStateChanged:", user);
                            setLoginState(true);
                            handleUserData(user);
                        } else {
                            console.log("No user found");
                            setUserData(null);
                        }
                    });
                }
            } catch (error) {
                console.error("Error during getRedirectResult or onAuthStateChanged:", error);
            } finally {
            setLoading(false);
            }
        };
        checkAuthState();
    }, []);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    },[]);


    return (
        <AuthContext.Provider value={{ loginState, userData, login, logout }}>
        {loading ?( 
                <div className='loading-container'>
                    <Loading/> 
                </div>
            ): (
            children
        )}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};

