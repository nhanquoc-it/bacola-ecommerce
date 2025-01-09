import React from "react";
import { Button } from "@mui/material";
import { IoBagOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

import "./CartUser.scss";

const CartUser = () => {
	return (
		<>
			<div className="d-flex align-items-center ml-auto">
				<Button className="nqd-circle mr-3">
					<LuUserRound />
				</Button>
				<div className="ml-auto nqd-cart d-flex align-items-center">
					<span className="nqd-price">$3.29</span>
					<div className="position-relative ml-3">
						<Button className="nqd-circle">
							<IoBagOutline />
						</Button>
						<span className="nqd-count d-flex align-items-center justify-content-center">
							1
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartUser;
