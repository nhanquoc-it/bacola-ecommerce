import "./Navigation.scss";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { MdToys } from "react-icons/md";
import { GiHealing } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	return (
		<nav>
			<div className="container">
				<div className="row">
					<div className="nqd-navbar-vertical col-sm-3">
						<div className="nqd-category-wrapper">
							<Button
								className="all-categories d-flex align-items-center"
								onClick={() => setIsOpenSidebar(!isOpenSidebar)}
							>
								<span className="icon-menu">
									<IoIosMenu />
								</span>
								<span className="text">ALL CATEGORIES</span>
								<span className="icon-down">
									<FaAngleDown />
								</span>
							</Button>

							<div
								className={`nqd-sidebar ${
									isOpenSidebar === true ? "open" : ""
								}`}
							>
								<ul>
									<li>
										<Link to="/">
											Toys & Models
											<FaAngleRight className="ml-auto" />
										</Link>
										<div className="nqd-sub-menu-cate">
											<Link to="/">Domestic Books</Link>
											<Link to="/">Foreign Books</Link>
											<Link to="/">Brand Cooperation Model</Link>
											<Link to="/">Souvenir Shop</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											Beauty Health
											<FaAngleRight className="ml-auto" />
										</Link>
										<div className="nqd-sub-menu-cate">
											<Link to="/">Souvenir Shop</Link>
											<Link to="/">Foreign Books</Link>
											<Link to="/">Brand Cooperation Model</Link>
											<Link to="/">Domestic Books</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											School Supplies
											<FaAngleRight className="ml-auto" />
										</Link>
										<div className="nqd-sub-menu-cate">
											<Link to="/">Domestic Books</Link>
											<Link to="/">Foreign Books</Link>
											<Link to="/">Brand Cooperation Model</Link>
											<Link to="/">Souvenir Shop</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											School Supplies
											<FaAngleRight className="ml-auto" />
										</Link>
										<div className="nqd-sub-menu-cate">
											<Link to="/">Domestic Books</Link>
											<Link to="/">Foreign Books</Link>
											<Link to="/">Brand Cooperation Model</Link>
											<Link to="/">Souvenir Shop</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											School Supplies
											<FaAngleRight className="ml-auto" />
										</Link>
										<div className="nqd-sub-menu-cate">
											<Link to="/">Domestic Books</Link>
											<Link to="/">Foreign Books</Link>
											<Link to="/">Brand Cooperation Model</Link>
											<Link to="/">Souvenir Shop</Link>
										</div>
									</li>
									<li>
										<Link to="/">More</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="nqd-navbar-horizontal col-sm-9 d-flex align-items-center">
						<ul className="list list-inline ml-auto d-flex align-items-center">
							<li className="list-inline-item">
								<Link to="/">
									<AiFillHome /> &nbsp; Home
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									Shop &nbsp; <FaAngleDown />
								</Link>
								<div className="nqd-sub-menu shadow">
									<Link to="/">Domestic Books</Link>
									<Link to="/">Foreign Books</Link>
									<Link to="/">Brand Cooperation Model</Link>
									<Link to="/">Souvenir Shop</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<MdToys /> &nbsp; Toys & Models
								</Link>
								<div className="nqd-sub-menu shadow">
									<Link to="/">Domestic Books</Link>
									<Link to="/">Foreign Books</Link>
									<Link to="/">Brand Cooperation Model</Link>
									<Link to="/">Souvenir Shop</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<GiHealing /> &nbsp; Beauty Health
								</Link>
								<div className="nqd-sub-menu shadow">
									<Link to="/">Domestic Books</Link>
									<Link to="/">Foreign Books</Link>
									<Link to="/">Brand Cooperation Model</Link>
									<Link to="/">Souvenir Shop</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<TbTools /> &nbsp; School Supplies
								</Link>
								<div className="nqd-sub-menu shadow">
									<Link to="/">Domestic Books</Link>
									<Link to="/">Foreign Books</Link>
									<Link to="/">Brand Cooperation Model</Link>
									<Link to="/">Souvenir Shop</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">Blog</Link>
							</li>
							<li className="list-inline-item">
								<Link to="/">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
