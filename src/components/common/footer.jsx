import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Pagina principal</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Sobre nós</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles"> Orçamentos/Contato</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
