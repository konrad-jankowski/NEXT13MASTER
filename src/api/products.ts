import { type ProductListItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const productResponseItemToProductListItem = (
	product: ProductResponseItem,
): ProductListItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
		image: {
			alt: product.title,
			src: product.image,
		},
	};
};

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductResponseItem[];

	// return productsResponse.map((product) => productResponseItemToProductListItem(product));
	/*point-free style*/
	return productsResponse.map(productResponseItemToProductListItem);
};
export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductListItem(productResponse);
};