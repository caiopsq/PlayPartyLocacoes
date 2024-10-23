import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Opa! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								Não encontramos a página que você está buscando.
								<br />
								Essa URL "{window.location.href}" não foi encontrada neste servidor.
							</div>
							<a href="/" className="not-found-link">
								Voltar para a página principal.
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
