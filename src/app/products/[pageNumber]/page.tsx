import { getProductsList, getProductsListWithPagination } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/atoms/Pagination";

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const pageSize = 4;
	const allProducts = await getProductsList();
	const products = await getProductsListWithPagination(Number(params.pageNumber), pageSize);

	const pages = allProducts?.length || 1;

	const pageNumbers = [];
	for (let i = 1; i <= pages; i++) {
		pageNumbers.push(i);
	}

	return (
		<section className="px-10">
			<h2 className="my-4 text-center">Strona number: {params.pageNumber}</h2>
			<ProductsList products={products} />
			<div className="mt-4 flex justify-center gap-2">
				{pageNumbers.map((page) => {
					return <Pagination key={page} pageNumber={params.pageNumber} page={page} />;
				})}
			</div>
		</section>
	);
}
