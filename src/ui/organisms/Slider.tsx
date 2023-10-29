"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = ({
	images,
}: {
	images: { attributes?: { url: string } | null | undefined }[] | undefined;
}) => {
	return (
		<Swiper
			className="h-full w-full"
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			navigation={true}
			spaceBetween={18}
			slidesPerView={2}
			speed={1000}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{images?.map((image) => {
				return (
					<SwiperSlide key={image.attributes?.url}>
						<div className="relative h-full w-full cursor-grab overflow-hidden rounded-lg">
							<Image
								className="object-cover"
								src={image.attributes?.url ?? ""}
								alt="Picture of the author"
								fill
							/>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
