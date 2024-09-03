import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import ReactDOMServer from "react-dom/server";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';

/* import './home.css'; */ // Assuming styles are merged here
import './web.css'; // Import styles from web.js

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
		} catch (error) {
		console.error("Error creating user on server:", error);
		}
	};

	const OnCheckInClick = () => {
		const qrCodeHtml = ReactDOMServer.renderToString(<QRCode value={"example.com"} />); // Replace with UserData.uid
		Swal.fire({
		title: "簽到QRcode",
		html: qrCodeHtml,
		confirmButtonText: "確定",
		background: "#20212d",
		width: "25rem",
		});
	};

	const getUserProfile = async () => {
		const userDocRef = doc(db, "UserProfile", auth?.currentUser.uid);
		const userDoc = await getDoc(userDocRef);
		if (userDoc.exists()) {
		return userDoc.data();
		} else {
		return null;
		}
	};

	useEffect(() => {
		const fetchUserData = async () => {
		setLoading(true);
		const userData = await getUserProfile();
		setUserData(userData);
		setLoading(false);
		};
		fetchUserData();
	}, []);


	function MemberStatusBlock (){
		return (
		<>
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
		</>
		)
	}


	return (
		<div className="homepage">
			<Helmet>
				<title>GDSC NSYSU - Home</title>
			</Helmet>
			{loading ? (
				<div className="loading-spinner">
					<div className="spinner"></div>
				</div>
				) : (
				<>
				<div className="web-web">
					<div className="web-profile">
						<div className="web-photo-and-name">
							<img
							alt="Profile"
							src={UserData?.Avatar}
							className="web-ellipse1"
							/>
							<div className="web-discord" onClick={ConnectDiscord}>
								<span className="web-text12">
									<span>Connect to Discord</span>
								</span>
							</div>
						</div>
						<div className="web-personal-info">
							{MemberStatusBlock()}
						</div>
					</div>

					<div className="web-info">
						<div className="web-frame1">
							<span className="web-text26">
								<span>社課報名</span>
							</span>
						</div>
						<div className="web-frame2">
							<span className="web-text28">
								<span>課程列表</span>
							</span>
						</div>
					</div>

					<button className="floating-button" id="_signin_floatingButton" onClick={OnCheckInClick}>
						課程簽到
					</button>
				</div>
				</>
			)}
		</div>
	);
};

export default Home;
