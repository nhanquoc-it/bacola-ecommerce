import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { Button, Slide } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import "./ModalDialog.scss";
import { MyContext } from "~/App";

// Slide modal dialog
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const ModalDialog = ({ open, handleClose, setIsOpenModal }) => {
	const context = useContext(MyContext);

	// Initialize state
	const [countryList, setCountryList] = useState([]);
	const [selectedTab, setSelectedTab] = useState(null);

	// Handle to select contry
	const selectCountry = (index, country) => {
		setSelectedTab(index);
		setIsOpenModal(false);
		context.setSelectedCountry(country);
	};

	// Get value from "context" and assign to state component
	useEffect(() => {
		setCountryList(context.countryList);
	}, [context.countryList]);

	// Search your area name country
	const filterList = (e) => {
		const keyword = e.target.value.toLowerCase();

		if (keyword !== "") {
			const list = countryList.filter((item) => {
				return item.country.toLowerCase().includes(keyword);
			});
			setCountryList(list);
		} else {
			setCountryList(context.countryList);
		}
	};

	return (
		<>
			<Dialog
				className="dialog-location"
				open={open}
				TransitionComponent={Transition}
			>
				<h3 className="dialog-title">Choose your Delivery Location</h3>
				<p className="dialog-desc">
					Enter your address and we will specify the offer for your area.
				</p>
				<Button className="dialog-close" onClick={handleClose}>
					<IoMdClose />
				</Button>

				<div className="header-search w-100">
					<input
						className="nqd-search-input"
						type="text"
						placeholder="Search your area"
						onChange={filterList}
					/>
					<Button className="nqd-search-btn">
						<IoSearch />
					</Button>
				</div>

				<ul className="country-list mt-3">
					{countryList?.length !== 0 &&
						countryList?.map((item, index) => {
							return (
								<li key={index}>
									<Button
										onClick={() => selectCountry(index, item.country)}
										className={`${selectedTab === index ? "active" : ""}`}
									>
										{item.country}
									</Button>
								</li>
							);
						})}
				</ul>
			</Dialog>
		</>
	);
};

export default ModalDialog;
