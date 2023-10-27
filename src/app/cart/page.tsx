import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { type Metadata } from "next";
import { ChangeQuantity } from "./ChangeQuantity";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { formatMoney } from "@/utilis";
import { RemoveButton } from "./RemoveButton";

export const metadata: Metadata = {
	title: "Shopping cart",
	description: "Kup coś",
};

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { order: cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			orderId: cartId,
		},
		next: {
			tags: ["cart"],
		},
	});

	if (!cart) {
		redirect("/");
	}

	// const quantity = cart.data?.attributes?.order_items?.data.length ?? 0;

	return (
		<div className="bg-gray-100 p-12">
			<div className="bg-white p-10">
				{/* <h1 className="text-lg font-medium">Koszyk ({quantity})</h1> */}
				<p>Kup za 179,02 zł więcej i otrzymaj darmową wysyłkę</p>
				{cart.data?.attributes?.order_items?.data.map((item) => (
					<div key={item.id} className="my-2 flex justify-between">
						<div className="flex gap-6">
							<Image
								src={
									item.attributes?.product?.data?.attributes?.images.data[0].attributes?.url ?? ""
								}
								alt=""
								width={100}
								height={100}
							/>
							<div className="flex flex-col justify-between py-3">
								<h2 className="font-medium">{item.attributes?.product?.data?.attributes?.name}</h2>
								<p>{item.attributes?.Quantity} x</p>
								<ChangeQuantity
									key={item.id}
									itemId={item.id}
									quantity={item.attributes?.Quantity ?? 0}
								/>
							</div>
						</div>
						<div className="flex flex-col justify-around">
							<RemoveButton productId={item.id} />
							<p>{formatMoney(item.attributes?.Total ?? 0)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
