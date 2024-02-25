import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { type Metadata } from "next";
import { ChangeQuantity } from "./ChangeQuantity";
import { RemoveButton } from "./RemoveButton";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const metadata: Metadata = {
	title: "Shopping cart",
	description: "Kup coś",
};

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

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

	const quantity = cart.data?.attributes?.order_items?.data.length ?? 0;

	return (
		<div className="mt-[7rem] flex  gap-6 bg-gray-100 p-12">
			<div className="h-fit basis-[70%] bg-white p-10">
				<h1 className="mb-3 text-lg font-medium">Koszyk ({quantity})</h1>
				<p className="py-1">Kup za minimum 200 zł więcej i otrzymaj darmową wysyłkę</p>
				{cart.data?.attributes?.order_items?.data.map((item) => (
					<div key={item.id} className="my-2 flex justify-between">
						<div className="flex gap-6">
							{" "}
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
								<ChangeQuantity
									key={item.id}
									itemId={item.id as string}
									quantity={item.attributes?.Quantity ?? 0}
									productPrice={item.attributes?.product?.data?.attributes?.price ?? 0}
								/>
							</div>
						</div>
						<div className="flex flex-col justify-around">
							<RemoveButton productId={item.id as string} />
							<p>{formatMoney(item.attributes?.Total ?? 0)}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex basis-[30%] flex-col gap-2 bg-white px-6 pb-5 pt-3">
				<h2 className="border-b border-black/20 pb-5 font-medium">Podsumowanie</h2>
				<div className="mt-4 flex justify-between font-medium">
					<h3>Oszczędzasz</h3>
					<p className="">0,00 zł</p>
				</div>
				<div className="flex justify-between font-medium">
					<h3>Wysyłka</h3>
					<p className="text-gray-500">Obliczona w kolejnym kroku</p>
				</div>
				<p className="mb-5 text-sm text-black/80">
					Kartę upominkową lub rabat możesz aktywować później
				</p>
				<div className="mb-2 flex justify-between border-t border-black/20 pt-5 font-medium">
					<h3>Razem</h3>
					<p>{cart.data?.attributes?.Total}</p>
				</div>
				<button className="rounded-md bg-black px-8 py-2 uppercase text-white">idź do kasy</button>
			</div>
		</div>
	);
}
