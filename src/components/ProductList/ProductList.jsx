import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { ProductItem } from "~/components/ProductItem";

const ProductList = () => {
	return (
		<div className="nqd-product-list w-100 mt-4">
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				{/* @ Product Item */}
				<SwiperSlide>
					<ProductItem />
				</SwiperSlide>

				<SwiperSlide>
					<ProductItem />
				</SwiperSlide>

				<SwiperSlide>
					<ProductItem />
				</SwiperSlide>

				<SwiperSlide>
					<ProductItem />
				</SwiperSlide>

				<SwiperSlide>
					<ProductItem />
				</SwiperSlide>

				<SwiperSlide>
					<ProductItem />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ProductList;
