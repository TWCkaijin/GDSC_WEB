import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import ReactDOMServer from "react-dom/server";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
/* import './home.css'; */ // Assuming styles are merged here
import './Home.css'; // Import styles from web.js

const Home = () => {
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	try{
	const [loading, setLoading] = useState(true);
	const [UserData, setUserData] = useState(null);
	

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
		const qrCodeHtml = ReactDOMServer.renderToString(
		<>
			<QRCode value={UserData?.uid} 
				bgColor='#ffffff'
				fgColor="var(--dl-component-box-color)"
				level="Q"
				includeMargin={true}
				size={200}
			/>
		</>);


		Swal.fire({
		title: "簽到QRcode",
		html: qrCodeHtml,
		text:"this is text",
		confirmButtonText: "關閉",
		background: "var(--dl-component-box-color)",
		width: "auto",
		customClass: {
			title: "swal-title",
			htmlContainer: "swal-html-container",
			popup: "swal-popup",
			confirmButton: "swal-confirm-button",
		},
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
			<div className="status-box">
				<div className="status-box-title">會員身分</div>
				<div className="status-box-text">
					{UserData ? (UserData.MemberInfo?.MemberType) : "Load Error"}
				</div>
			</div>
			<div className="status-box">
				<div className="status-box-title">到課次數</div>
				<div className="status-box-text">
					{UserData?.CourseStatus ? (UserData?.CourseStatus?.Attendence) : "Load Error"}
				</div>
			</div>
			{UserData.MemberInfo?.MemberType==="spectator"?null:
			<>
				<div className="status-box">
					<div className="status-box-title">會員身分到期日</div>
					<div className="status-box-text">
						{UserData?.MemberInfo? UserData?.MemberInfo?.QualificationExpiration||"No Info" :"Load Error"}
					</div>
				</div>
				<div className="status-box">
					<div className="status-box-title">專案組狀態</div>
					<div className="status-box-text">{"Null"}</div>
				</div>
			</>
			}
			
			<div className="status-box">
				<div className="status-box-title">繳費狀態</div>
				<div className="status-box-text">
					{UserData?.Payment?.Amount + " / " + UserData?.Payment?.Required}
				</div>
			</div>
			
			<div className="status-box">
				<div className="status-box-title">上次登入</div>
				<div className="status-box-text">
					{ UserData?.LastLogin ? 
						(() => {
							const timestamp = UserData.LastLogin;
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleString('zh-TW', {
			year:"numeric",
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
						})() : "Load Error"
					}
				</div>
			</div>
		</>
		)
	}

	function ProjectStatusBlock(){
		
	}

	function CourseListBlock(){
		return (
			<div className="web-frame1">
				<span className="web-text26">
					<span>社課報名</span>
				</span>
			</div>
		)
	}

	function ProjectListBlock(){
		return (
			<div className="web-frame2">
				<span className="web-text28">
					<span>課程列表</span>
				</span>
			</div>
		)
	}


	function discordButton(){
		if(!UserData?.Discord){
			return (
				<div className="web-discord" onClick={ConnectDiscord}>
					<img src="/images/discord-icon-black.webp" alt="Discord Logo" />
					<span>Connect to Discord</span>
				</div>
			)
		}else{
			return(
				<div className="web-discord">
					<img src={`https://cdn.discordapp.com/avatars/${UserData.Discord.UserId}/${UserData.Discord.Avatar}.png`} alt="Discord Logo" />
					<span className="discord-user-name">{UserData.Discord.UserName}</span>
				</div>
			)
		}
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
							{discordButton()}
						</div>
						<div className="web-personal-info">
							<div className="member-status-title" >
								成員狀態
							</div>
							<div className="status-container">
								{MemberStatusBlock()}
							</div>
						</div>
					</div>
					<div className="web-info">
					</div>
					{isMobile ? <button className="floating-button" onClick={OnCheckInClick}>簽到</button> : null}
				</div>
				</>
			)}
		</div>
	);
	}catch (fatalerrors){
		console.error(fatalerrors);
		
		Swal.fire({
			title: "Fatal Error",
			icon: "error",
			text: "發生錯誤，請重新登入並連繫開發者",
			confirmButtonText: "關閉",
			background: "white",
			width: "25rem",
			customClass: {
				title: "fatalerror-title",
				text: "fatalerror-text",
				popup: "swal-popup",
				confirmButton: "swal-confirm-button",
			},
			}).then((result) => {
				if(result.isConfirmed){
					localStorage.removeItem("userAuthData");
					navigate("/");
				}
			});
	}
};

export default Home;
