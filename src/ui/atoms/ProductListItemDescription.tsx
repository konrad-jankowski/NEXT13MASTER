import { formatMoney } from "@/utilis";

type ProductListItemDescription = {
	product: {
		name: string;
		category: string;
		price: number;
	};
};

export const ProductListItemDescription = ({
	product: { name, category, price },
}: ProductListItemDescription) => {
	return (
		<div className="mt-2 flex w-full ">
			<div className="w-full">
				<div className="flex justify-between">
					<h3>{name}</h3>
					<div>{formatMoney(price / 100)}</div>
				</div>
				<p className="text-gray-500">{category}</p>
			</div>
		</div>
	);
};
