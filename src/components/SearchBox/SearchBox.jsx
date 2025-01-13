import React from "react";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";

import "./SearchBox.scss";

const SearchBox = () => {
	return (
		<>
			<div className="header-search ml-3 mr-3">
				<input
					className="nqd-search-input"
					type="text"
					placeholder="Search for products..."
				/>
				<Button className="nqd-search-btn">
					<IoSearch />
				</Button>
			</div>
		</>
	);
};

export default SearchBox;
