"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { changeItemQuantity } from "../actions";

export function ChangeQuantity({
	itemId,
	quantity,
	productPrice,
}: {
	itemId: string;
	quantity: number;
	productPrice: number;
}) {
	return (
		<>
			<p>{quantity} x</p>
			<form className="flex">
				<div>Cena: {productPrice * quantity}</div>
				<button
					type="submit"
					formAction={async () => {
						await changeItemQuantity(itemId, quantity - 1, productPrice);
					}}
				>
					<MinusCircle size={24} />
				</button>
				<span className="w-8 text-center">{quantity}</span>
				<button
					type="submit"
					formAction={async () => {
						await changeItemQuantity(itemId, quantity + 1, productPrice);
					}}
				>
					<PlusCircle size={24} />
				</button>
			</form>
		</>
	);
}
