import Image from "next/image";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square cursor-pointer overflow-hidden rounded-md bg-red-200">
			<Image
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="top-4 h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};
