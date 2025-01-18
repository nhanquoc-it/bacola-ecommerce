import React from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";

import "./ProductItem.scss";

const ProductItem = () => {
	return (
		<div className="item nqd-product-item">
			<div className="nqd-product-image">
				<img
					className="w-100"
					src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
					alt="Product Images"
				/>

				<span className="nqd-badge-product nqd-badge-primary">28%</span>

				<div className="nqd-product-actions">
					<Button>
						<SlSizeFullscreen />
					</Button>
					<Button>
						<FaRegHeart />
					</Button>
				</div>
			</div>

			<div className="nqd-product-info">
				<h4 className="product-name">
					All Natural Italian-Style Chicken Meatballs
				</h4>
				<span className="product-stock d-block">In Stock</span>
				<Rating
					className="mt-2 mb-2"
					name="read-only"
					value={5}
					precision={0.5}
					readOnly
				/>

				<div className="d-flex align-items-baseline">
					<span className="product-old-price">$20.00</span>
					<span className="product-new-price ml-3">$25.00</span>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
