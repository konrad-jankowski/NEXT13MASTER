import Image from "next/image";
import Link from "next/link";
import { getCollectionsList } from "@/api/products";

export default async function CollectionsPage() {
	const collections = await getCollectionsList();

	return (
		<div className="flex flex-col items-center justify-center gap-8">
			<h1 className="text-lg font-medium">Najnowsze kolekcje</h1>
			<div className="flex gap-4">
				{collections?.map((collection) => {
					return (
						<Link
							href={`/collections/${collection.attributes?.slug}`}
							className="cursor-pointer"
							key={collection.id}
						>
							<h2 className="mb-2 text-center font-medium capitalize">
								{collection.attributes?.name}
							</h2>
							<Image
								width={300}
								height={240}
								src={collection.attributes?.image.data?.attributes?.url ?? ""}
								alt={`image of ${collection.attributes?.name}`}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
