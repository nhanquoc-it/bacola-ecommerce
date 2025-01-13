import React from "react";
import { Dialog } from "@mui/material";
import { Button, Slide } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import "./ModalDialog.scss";

// Hiệu ứng modal dialog
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const ModalDialog = ({ open, handleClose }) => {
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
					/>
					<Button className="nqd-search-btn">
						<IoSearch />
					</Button>
				</div>

				<ul className="country-list mt-3">
					<li>
						<Button>India</Button>
					</li>
					<li>
						<Button>Pakistan</Button>
					</li>
					<li>
						<Button>Indonesia</Button>
					</li>
					<li>
						<Button>Philippines</Button>
					</li>
					<li>
						<Button>Vietnamese</Button>
					</li>
					<li>
						<Button>American</Button>
					</li>
					<li>
						<Button>India</Button>
					</li>
					<li>
						<Button>Pakistan</Button>
					</li>
					<li>
						<Button>Indonesia</Button>
					</li>
					<li>
						<Button>Philippines</Button>
					</li>
					<li>
						<Button>Vietnamese</Button>
					</li>
					<li>
						<Button>American</Button>
					</li>
					<li>
						<Button>India</Button>
					</li>
					<li>
						<Button>Pakistan</Button>
					</li>
					<li>
						<Button>Indonesia</Button>
					</li>
					<li>
						<Button>Philippines</Button>
					</li>
					<li>
						<Button>Vietnamese</Button>
					</li>
					<li>
						<Button>American</Button>
					</li>
				</ul>
			</Dialog>
		</>
	);
};

export default ModalDialog;
