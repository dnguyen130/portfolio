import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import { SiFacebook, SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

import { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

import ImgButton from "../ImgButton";

import { motion } from "framer-motion";

init("user_NBrl3xmy2qTPZHQYDw16x");

const ContactCont = styled.div`
	height: 400px;
	background: linear-gradient(
		135deg,
		${(props) => props.bargrad1},
		50%,
		${(props) => props.bargrad2}
	);
	width: 100%;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	box-shadow: 5px 5px 5px black;
	margin-bottom: 50px;
`;

const SocialCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 30%;
	height: 100%;
`;

const SocialHeader = styled.h1`
	margin: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	color: ${(props) => props.hcolor};
`;

const ButtonRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	padding: 20px;
`;

const FormCont = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100%;
	width: 50%;
`;

const FormInput = styled.input`
	font-size: 1.2em;
	font-family: Outfit, sans-serif;
	padding: 5px;
	border-radius: 5px;
	background-color: ${(props) => props.inputcolor};
	color: ${(props) => props.textcolor};
	transition: 0.1s;

	&:focus {
		outline: 3px solid ${(props) => props.focuscolor};
	}

	::placeholder {
		opacity: 0.5;
	}
`;

const FormInputHalf = styled.input`
	font-size: 1.2em;
	font-family: Outfit, sans-serif;
	padding: 5px;
	border-radius: 5px;
	width: 49%;
	background-color: ${(props) => props.inputcolor};
	color: ${(props) => props.textcolor};
	transition: 0.1s;

	&:focus {
		outline: 3px solid ${(props) => props.focuscolor};
	}

	::placeholder {
		opacity: 0.5;
	}
`;

const FormTextArea = styled.textarea`
	font-size: 1em;
	font-family: Outfit, sans-serif;
	border-radius: 5px;
	height: 40%;
	padding: 5px;
	background-color: ${(props) => props.inputcolor};
	color: ${(props) => props.textcolor};
	resize: none;
	transition: 0.1s;

	&:focus {
		outline: 3px solid ${(props) => props.focuscolor};
	}

	::placeholder {
		opacity: 0.5;
	}
`;

const FormButton = styled.input`
	font-size: 1.5em;
	width: 200px;
	font-family: Outfit, sans-serif;
	font-weight: 500;
	background-color: ${(props) => props.buttoncolor};
	color: ${(props) => props.textcolor};
	border-radius: 10px;
	cursor: pointer;

	transition: 0.25s ease-out;

	&:hover {
		background-color: ${(props) => props.buttonhover};
	}
`;

const FormRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

const OrCont = styled.h1`
	color: ${(props) => props.orColor};
`;

const variants = {
	visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1.5 } },
	hidden: { opacity: 0, y: 100 },
};

const Contact = () => {
	const { theme } = useTheme();
	const [sent, setSent] = useState(false);
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_0ywqtim",
				"template_v98mzdk",
				form.current,
				"user_NBrl3xmy2qTPZHQYDw16x"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
					e.target.reset();
				},
				(err) => {
					console.log(err.text);
				}
			);
	};

	return (
		<motion.div
			viewport={{ once: true }}
			whileInView="visible"
			initial="hidden"
			variants={variants}
		>
			<ContactCont
				bargrad1={site_theme[theme].gray}
				bargrad2={site_theme[theme].background}
			>
				<SocialCont>
					<SocialHeader hcolor={site_theme[theme].text}>
						Social Platforms
					</SocialHeader>
					<ButtonRow>
						<ImgButton>
							<SiLinkedin color={site_theme[theme].background} size="40px" />
						</ImgButton>
						<ImgButton imgLink="https://github.com/dnguyen130">
							<SiGithub color={site_theme[theme].background} size="40px" />
						</ImgButton>
					</ButtonRow>
				</SocialCont>
				<OrCont orColor={site_theme[theme].text}>Or</OrCont>
				<FormCont ref={form} onSubmit={sendEmail}>
					<FormRow>
						<FormInputHalf
							type="text"
							name="user_name"
							placeholder="Name (required)"
							required
							inputcolor={site_theme[theme].background}
							textcolor={site_theme[theme].text}
							focuscolor={site_theme[theme].strong}
						/>
						<FormInputHalf
							type="text"
							name="subject"
							placeholder="Subject"
							inputcolor={site_theme[theme].background}
							textcolor={site_theme[theme].text}
							focuscolor={site_theme[theme].strong}
						/>
					</FormRow>
					<FormInput
						type="email"
						name="user_email"
						placeholder="Email (required)"
						required
						inputcolor={site_theme[theme].background}
						textcolor={site_theme[theme].text}
						focuscolor={site_theme[theme].strong}
					/>
					<FormTextArea
						name="message"
						placeholder="Message (required)"
						inputcolor={site_theme[theme].background}
						textcolor={site_theme[theme].text}
						focuscolor={site_theme[theme].strong}
						required
					/>
					<FormRow>
						{sent && (
							<div
								style={{
									color: site_theme[theme].strong,
									fontSize: "1.5em",
									fontWeight: 600,
								}}
							>
								Message Received!
							</div>
						)}
						{sent === false && <div />}
						<FormButton
							type="submit"
							value="Send"
							required
							buttoncolor={site_theme[theme].text}
							buttonhover={site_theme[theme].strong}
							textcolor={site_theme[theme].background}
						/>
					</FormRow>
				</FormCont>
			</ContactCont>
		</motion.div>
	);
};

export default Contact;
