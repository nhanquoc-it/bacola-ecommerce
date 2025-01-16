import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

import "./CountryDropdown.scss";
import { ModalDialog } from "~/components/ModalDialog";
import { MyContext } from "~/App";

const CountryDropdown = () => {
	const context = useContext(MyContext);

	// Initialize state
	const [isOpenModal, setIsOpenModal] = useState(false);

	// Handling open modal dialog
	const handleOpenModal = () => {
		setIsOpenModal(true);
	};
	// Handling close modal dialog
	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			<Button className="nqd-country-dropdown" onClick={handleOpenModal}>
				<div className="info d-flex flex-column">
					<span className="label">Your Location</span>
					<span className="name">
						{context.selectedCountry !== ""
							? context.selectedCountry.length > 10
								? context.selectedCountry?.substr(0, 10) + "..."
								: context.selectedCountry
							: "Select Location"}
					</span>
				</div>
				<span className="ml-auto dropdown-icon">
					<FaAngleDown />
				</span>
			</Button>

			<ModalDialog
				open={isOpenModal}
				handleClose={handleCloseModal}
				setIsOpenModal={setIsOpenModal}
			/>
		</>
	);
};

export default CountryDropdown;
