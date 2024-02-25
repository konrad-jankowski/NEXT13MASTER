import Image from "next/image";
import { getBestsellersProductsList, getNewProductsList } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function HomePage() {
	const newProducts = await getNewProductsList();
	// const bestsellers = await getBestsellersProductsList();

	return (
		<main className=" flex flex-col">
			<div className="w-full ">
				<figure className="relative h-screen w-full">
					<Image className="object-cover" src={"/banner.jpg"} alt="banner" fill />
					<div className="absolute inset-0 z-50 flex flex-col items-start justify-center px-16 text-white">
						<h1 className="mb-1 text-5xl">Zadbaj o więcej niż wygląd włosów</h1>
						<p className="text-base">Naturalna, świadoma i skuteczna pielęgnacja włosów.</p>
						<button className="mt-4 rounded-md bg-white px-6 py-2 font-medium uppercase text-black">
							Przegladaj produkty
						</button>
					</div>
				</figure>
			</div>
			<section className="mt-5 flex flex-col items-center px-10">
				<h2 className="my-4 font-medium">Nowe produkty</h2>
				<ProductsList products={newProducts?.slice(0, 1)} />
				<h2 className="my-4 font-medium">Nasze bestsellery</h2>
				{/* <ProductsList products={bestsellers?.slice(0, 1)} /> */}
			</section>
		</main>
	);
}
