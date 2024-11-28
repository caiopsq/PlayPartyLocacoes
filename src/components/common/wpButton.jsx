import React from "react";
import { Link } from "react-router-dom";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "../../data/user";

import "./styles/wpButton.css";

const WpButton = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="wpp-button">
			<a href={INFO.socials.whatsapp}
			target="blank"
			rel="noreferrer">
				<FontAwesomeIcon
					icon={faWhatsapp}
					className="homepage-social-icon"
				/>
			</a>
			</div>
		</React.Fragment>
	);
};

export default WpButton;
