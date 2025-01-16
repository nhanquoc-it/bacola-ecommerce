import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { MyContext } from "~/App";

import Logo from "~/assets/images/bacola-logo.png";
import { CountryDropdown } from "~/components/Header";
import { SearchBox } from "~/components/SearchBox";
import { CartUser } from "~/components/Header";
import { Navigation } from "~/components/Navigation";

const Header = () => {
	const context = useContext(MyContext);

	return (
		<>
			<header className="header">
				<div className="header-top bg-blue">
					<div className="container">
						<p className="mb-0 mt-0 text-center">
							Due to the <strong>COVID 19</strong> epidemic, orders may be
							processed with a slight delay
						</p>
					</div>
				</div>

				<div className="header-bottom">
					<div className="container">
						<div className="row">
							<div className="col-sm-2 d-flex align-items-center">
								<Link to={"/"}>
									<img className="nqd-logo" src={Logo} alt="Logo" />
								</Link>
							</div>

							<div className="col-sm-10 d-flex align-items-center">
								{context.countryList.length !== 0 && <CountryDropdown />}

								<SearchBox />
								<CartUser />
							</div>
						</div>
					</div>
				</div>

				{/* Navigation */}
				<Navigation />
			</header>
		</>
	);
};

export default Header;
