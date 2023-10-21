import Image from "next/image";
import { getSingleCollectionById } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function CollectionPage({ params }: { params: { slug: string } }) {
	const collection = await getSingleCollectionById(params.slug);

	return (
		<article>
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className=" font-medium capitalize">{collection?.attributes?.name}</h1>
				<Image
					width={300}
					height={240}
					src={collection?.attributes?.image.data?.attributes?.url ?? ""}
					alt=""
				/>
				<div>
					<h2>{collection?.attributes?.description}</h2>
					<p className="py-4 font-medium">Produkty:</p>
					<div>
						<ProductsList key={collection?.id} products={collection?.attributes?.products?.data} />
					</div>
				</div>
			</div>
		</article>
	);
}
