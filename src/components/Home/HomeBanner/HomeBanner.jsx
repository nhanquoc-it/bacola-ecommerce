import React from "react";
import Slider from "react-slick";

import "./HomeBanner.scss";

const HomeBanner = () => {
	// Setting Slider Carousel
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
	};

	return (
		<section className="home-section">
			<div className="nqd-home-slider">
				<Slider {...settings}>
					<div className="nqd-item">
						<img
							className="d-block w-100"
							src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
							alt="slider images"
						/>
					</div>
					<div className="nqd-item">
						<img
							className="d-block w-100"
							src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
							alt="slider images"
						/>
					</div>
					<div className="nqd-item">
						<img
							className="d-block w-100"
							src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
							alt="slider images"
						/>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default HomeBanner;
