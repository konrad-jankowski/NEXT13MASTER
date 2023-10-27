"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function AddToCartButton() {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="mt-4 w-full rounded-md border bg-black px-8 py-3 text-white transition duration-150 hover:bg-white hover:text-black disabled:cursor-wait disabled:bg-black/70"
		>
			{status.pending ? "Dodawanie do koszyka..." : "Dodaj do koszyka"}
		</button>
	);
}
