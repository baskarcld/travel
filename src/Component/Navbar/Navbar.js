import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<nav className="py-2 bg-dark">
			<div className="nav-container container-fluid d-flex flex-md-row flex-column justify-content-between align-items-center px-5">
				<div className="nav-logo-div mb-md-0 mb-4 mx-md-0 mx-auto">
					<img src="images/logo_footer.png" alt="logo" className="nav-logo" />
				</div>
				<div className="nav-ul-div mx-md-0 mx-auto py-md-0 py-3">
					<ul className="nav-ul d-flex flex-row align-items-center px-0 mb-0">
						<li className="mx-sm-4 mx-sm-2 mx-1">
							<a href="#" className="nav-a">
								Whitepaper
							</a>
						</li>
						<li className="mx-sm-4 mx-sm-2 mx-1">
							<a href="#" className="nav-a">
								Telegram
							</a>
						</li>
						<li className="mx-sm-4 mx-sm-2 mx-1">
							<a href="#" className="a-btn">
								Private sale
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
