import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { type Metadata } from "next";
import { ChangeQuantity } from "./ChangeQuantity";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const metadata: Metadata = {
	title: "Shopping cart",
	description: "Kup coś",
};

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { order: cart } = await executeGraphql(CartGetByIdDocument, {
		orderId: cartId,
	});

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="">
			<h1 className="text-lg font-medium">Your basket</h1>
			<h2>Order #{cart.data?.id} summary</h2>
			<table className="mt-4 table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.data?.attributes?.order_items?.data.map((item) => {
						if (!item.attributes?.product) {
							return null;
						}
						return (
							<tr key={item.attributes.product.data?.id}>
								<td>
									<h2>{item.attributes.product.data?.attributes?.name}</h2>
									<Image
										width={80}
										height={80}
										src={
											item.attributes.product.data?.attributes?.coverImage.data?.attributes?.url ??
											""
										}
										alt={item.attributes.product.data?.attributes?.name ?? ""}
									/>
								</td>
								<td className="px-4">
									<ChangeQuantity
										key={item.attributes.product.data?.id}
										itemId={item.id}
										quantity={item.attributes.Quantity}
									/>
								</td>
								<td>{formatMoney(item.attributes.product.data?.attributes?.price ?? 0)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<h3 className="mt-4">Total: {formatMoney(cart.data?.attributes?.Total ?? 0)}</h3>
		</div>
	);
}
