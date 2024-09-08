import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import ReactDOMServer from "react-dom/server";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import './Home.css';
import { useAuth } from "../../utils/authContext";
const Home = () => {
	const { userData } = useAuth();
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	console.log("In home page");
	try{

		const ConnectDiscord = () => {
			const user = auth?.currentUser;
			console.log("logging discord");
			try {
			const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=1261740789650948099&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fauth%2Fdiscord%2Fcallback&scope=identify&state=${user.uid}`;
			window.location.href = discordAuthUrl;
			} catch (error) {
				console.error("Error connecting to discord:", error);
			}
		};

		const OnCheckInClick = () => {
			const qrCodeHtml = ReactDOMServer.renderToString(
			<>
				<QRCode value={userData?.uid} 
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


		const timeTransform = (timestamp, scale) => {
			const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
			if(scale === "d"){
				return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleString('zh-TW', {
					year:"numeric",
					month: '2-digit',
					day: '2-digit',
					hour12: false
				});
			}else if(scale === "s"){
				return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleString('zh-TW', {
					year:"numeric",
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false
				});
			}
		}

		function MemberStatusBlock (){
			return (
			<>
				<div className="status-box">
					<div className="status-box-title">會員身分</div>
					<div className="status-box-text">
						{userData ? (userData?.MemberInfo?.MemberType) : "Load Error"}
					</div>
				</div>
				<div className="status-box">
					<div className="status-box-title">到課次數</div>
					<div className="status-box-text">
						{userData?.CourseStatus ? (userData?.CourseStatus?.Attendence) : "Load Error"}
					</div>
				</div>
				{userData.MemberInfo?.MemberType==="spectator"?null:
				<>
					<div className="status-box">
						<div className="status-box-title">會員身分到期日</div>
						<div className="status-box-text">
							{userData?.MemberInfo? timeTransform(userData?.MemberInfo?.QualificationExpiration , "d")||"No Info" :"Load Error"}
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
						{userData?.Payment?.Amount + " / " + userData?.Payment?.Required}
					</div>
				</div>
				
				<div className="status-box">
					<div className="status-box-title">上次登入</div>
					<div className="status-box-text">
						{ userData?.LastLogin ? 
							timeTransform(userData?.LastLogin, 's'): "Load Error"
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
			if(!userData?.Discord){
				return (<>
					<button className ="dcbtn" onClick={ConnectDiscord}>
						<img src="/images/discord-icon-black.webp" alt="Discord Logo" />
						<span className ="dctext">Connect Discord</span>
					</button>
				</>
				)
			}else{
				return(
					<div className="web-discord">
						<img src={`https://cdn.discordapp.com/avatars/${userData.Discord.UserId}/${userData.Discord.Avatar}.png`} alt="Discord Logo" />
						<span className="discord-user-name">{userData.Discord.UserName}</span>
					</div>
				)
			}
		}
		
		return (
			<div className="homepage">
				<Helmet>
					<title>GDSC NSYSU - Home</title>
				</Helmet>
				<>
					<div className="web-web">
						<div className="web-profile">
							<div className="web-photo-and-name">
								<img
								alt="Profile"
								src={userData?.Avatar}
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
			</div>
		);
	}catch (fatalerrors){
		console.error(fatalerrors);
	}
};

export default Home;
