import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { getProductsList } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<h1>
			<ul data-testid="products-list" className="grid grid-cols-4 gap-6">
				{products?.data.map((product) => {
					return <ProductListItem key={product.id} attributes={product.attributes} />;
				})}
			</ul>
		</h1>
	);
}
