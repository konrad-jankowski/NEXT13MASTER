"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { changeItemQuantity } from "../actions";

export function ChangeQuantity({ itemId, quantity }: { itemId: string; quantity: number }) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<button
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				<MinusCircle size={24} />
			</button>
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				<PlusCircle size={24} />
			</button>
		</form>
	);
}
