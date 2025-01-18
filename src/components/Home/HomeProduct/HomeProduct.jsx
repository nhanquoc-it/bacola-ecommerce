import React from "react";
import { Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

import "./HomeProduct.scss";
import { ProductList } from "~/components/ProductList";

const HomeProduct = () => {
	return (
		<section className="home-product">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="nqd-banner-left">
							<img
								className="nqd-banner-image"
								src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
								alt="Banner Images"
							/>
						</div>
					</div>
					<div className="col-md-9">
						<div className="d-flex align-items-center">
							<div className="nqd-info-right w-75">
								<h3 className="nqd-heading mb-0">Best Sellers</h3>
								<p className="nqd-desc mb-0">
									Do not miss the current offers until the end of March.
								</p>
							</div>

							<Button className="nqd-view-all ml-auto">
								View All <FaArrowRightLong />
							</Button>
						</div>

						{/* @ Product List  */}
						<ProductList />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeProduct;
