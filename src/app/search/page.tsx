import { getProductsListByName } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const query = searchParams.query as string;

	const products = await getProductsListByName(query);

	if (query === "") {
		return <div className="text-center">Brak wyników wyszukiwania</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<h3>
				Wyniki wyszukiwania dla <span className="font-medium underline">{query}</span>
			</h3>
			<h3>Ilość znalezionych produktów: {products?.length}</h3>
			<article className="mt-4">
				<ProductsList products={products} />
			</article>
		</div>
	);
}
