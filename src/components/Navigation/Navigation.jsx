import "./Navigation.scss";
import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { MdToys } from "react-icons/md";
import { GiHealing } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<div className="container">
				<div className="row">
					<div className="nqd-navbar-vertical col-sm-3">
						<Button className="all-categories d-flex align-items-center ">
							<span className="icon-menu">
								<IoIosMenu />
							</span>
							<span className="text">ALL CATEGORIES</span>
							<span className="icon-down">
								<FaAngleDown />
							</span>
						</Button>
					</div>
					<div className="nqd-navbar-horizontal col-sm-9 d-flex align-items-center">
						<ul className="list list-inline ml-auto d-flex align-items-center">
							<li className="list-inline-item">
								<Link to={"/"}>
									<AiFillHome /> &nbsp; Home
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to={"/"}>
									Shop &nbsp; <FaAngleDown />
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to={"/"}>
									<MdToys /> &nbsp; Toys & Models
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to={"/"}>
									<GiHealing /> &nbsp; Beauty Health
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to={"/"}>
									<TbTools /> &nbsp; School Supplies
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to={"/"}>Blog</Link>
							</li>
							<li className="list-inline-item">
								<Link to={"/"}>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
