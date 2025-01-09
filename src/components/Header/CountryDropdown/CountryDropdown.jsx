import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

import "./CountryDropdown.scss";

const CountryDropdown = () => {
	return (
		<>
			<Button className="nqd-country-dropdown">
				<div className="info d-flex flex-column">
					<span className="label">Your Location</span>
					<span className="name">India</span>
				</div>
				<span className="ml-auto dropdown-icon">
					<FaAngleDown />
				</span>
			</Button>
		</>
	);
};

export default CountryDropdown;
