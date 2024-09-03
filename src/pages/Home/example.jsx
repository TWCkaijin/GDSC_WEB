import { auth,db } from "../../config/firebase"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";

import { doc,setDoc, getDoc } from "firebase/firestore";
import axios from "axios";

import QRCode from "react-qr-code";
import Swal from "sweetalert2";

import "./home.css"


const Home = () => {	
	const [loading, setLoading] = useState(true);
	const [UserData, setUserData] = useState(null);
	const navigate = useNavigate();


	const logout = async () => {
		await auth.signOut();
		localStorage.removeItem("userData");
        setUserData(null);
		navigate("/");
	};





	const ConnectDiscord = () => {
		const user = auth?.currentUser;
		console.log("logging discord");
		try {
			const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=1261740789650948099&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fauth%2Fdiscord%2Fcallback&scope=identify&state=${user.uid}`;
			window.location.href = discordAuthUrl;
			console.log("User created on server:", response.data);

		} catch (error) {
			console.error("Error creating user on server:", error);
		}
	}


	const OnCheckInClick =() => {
		const qrCodeHtml = ReactDOMServer.renderToString(<QRCode value={"example.com"} />); /* UserData.uid */
        Swal.fire({
            title: "簽到QRcode",
            html: qrCodeHtml,
            confirmButtonText: "確定",
			background: "#20212d",
			width: "25rem",
        });
	}


	const getUserProfile = async () => {
		const userDocRef = doc(db, "UserProfile", auth?.currentUser.uid);
		const userDoc = await getDoc(userDocRef);
		if (userDoc.exists()) {
			console.log("User data:", userDoc.data());
			return userDoc.data();
		} else {
			return null;
		}
	}

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true);
			const userData = await getUserProfile();
			setUserData(userData);
			setLoading(false);
		};
		fetchUserData();
		console.log("Effect", UserData);
	}, []);


	function MemberStatusBlock (){
		return (
		<div className="status-list">
			<div className="member-status-title" >成員狀態</div>
			<div className="status-container">
				<div className="status-column">
					<div className="status-row">
						<div className="status-box">
							<div className="status-box-title">會員身分</div>
							<div className="status-box-text">
								{UserData ? (UserData.MemberInfo?.MemberType) : "Load Error"}
							</div>
						</div>
					</div>
					<div className="status-row">
						<div className="status-box">
							<div className="status-box-title">到課次數</div>
							<div className="status-box-text">
								{UserData?.CourseStatus ? (UserData?.CourseStatus?.Attendence) : "Load Error"}
							</div>
						</div>
					</div>
					<div className="status-row">
						<div className="status-box">
							<div className="status-box-title">會員身分到期日</div>
							<div className="status-box-text">
								{UserData?.MemberInfo? UserData?.MemberInfo?.QualificationExpiration||"No Info" :"Load Error"}
							</div>
						</div>
					</div>
				</div>
				<div className="status-column">
					<div className="status-row">
						<div className="status-box">
							<div className="status-box-title">繳費狀態</div>
							<div className="status-box-text">
								{UserData?.Payment?.Amount + " / " + UserData?.Payment?.Required}
							</div>
						</div>
					</div>
					<div className="status-row">
						<div className="status-box">
							<div className="status-box-title">專案組狀態</div>
							<div className="status-box-text">{"Null"}</div>
						</div>
					</div>
					<div className="status-row">
						<div className="status-box">
							<div className="status-box-title">上次登入</div>
							<div className="status-box-text">{"Time-null"}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}

	function ProjectStatusBlock (){
		return(
		<>
		</>
		)
	}


	return (
		<div className="homepage">
			{loading ? (
                <div className="loading-spinner">
                    {/* 這裡可以放置您的過場動畫，例如一個旋轉的圖標 */}
                    <div className="spinner"></div>
                </div>
            ) : (
			<>
				<div className="main_box-list">
					<div className="main_box">
						<img src="https://via.placeholder.com/40" alt="action"/>
						<p>社課報名(目前尚不需報名)</p>
					</div>
					<div className="main_box" href="#box">
						<img src="https://via.placeholder.com/40" alt="action"/>
						<p>課程列表(尚未啟用)</p>
					</div>
					<div className="cutline"></div>
					<div className="main_box" onClick={ConnectDiscord} >
						<img src="/images/discord_icon.png" alt="action"/>
						<p>連結至 Discord</p>
					</div>
					<div className="cutline"></div>
					{MemberStatusBlock()}
				</div>
				<button className="floating-button" id="_signin_floatingButton" onClick={OnCheckInClick}>課程簽到</button>
			</>
			)}
		</div>
	);
}

export default Home;
