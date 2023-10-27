import Image from "next/image";
import { getBestsellersProductsList, getNewProductsList } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function HomePage() {
	const newProducts = await getNewProductsList();
	const bestsellers = await getBestsellersProductsList();

	return (
		<main className="flex  flex-col items-center justify-center">
			<div className="w-full text-2xl font-medium">
				<figure className="relative h-screen w-full">
					<Image className="object-cover" src={"/banner.jpg"} alt="banner" fill />
				</figure>
			</div>
			<section className="mt-5 px-10">
				<h2 className="my-4 font-medium">Nowe produkty</h2>
				<ProductsList products={newProducts?.slice(0, 4)} />
				<h2 className="my-4 font-medium">Nasze bestsellery</h2>
				<ProductsList products={bestsellers?.slice(0, 4)} />
			</section>
		</main>
	);
}
