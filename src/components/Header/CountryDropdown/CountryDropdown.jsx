import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

import "./CountryDropdown.scss";
import { ModalDialog } from "~/components/ModalDialog";

const CountryDropdown = () => {
	// Khởi tạo state
	const [isOpenModal, setIsOpenModal] = useState(false);

	// Hàm xử lý mở modal dialog
	const handleOpenModal = () => {
		setIsOpenModal(true);
	};
	// Hàm xử lý đóng modal dialog
	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			<Button className="nqd-country-dropdown" onClick={handleOpenModal}>
				<div className="info d-flex flex-column">
					<span className="label">Your Location</span>
					<span className="name">India</span>
				</div>
				<span className="ml-auto dropdown-icon">
					<FaAngleDown />
				</span>
			</Button>

			<ModalDialog open={isOpenModal} handleClose={handleCloseModal} />
		</>
	);
};

export default CountryDropdown;
