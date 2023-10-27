"use client";
 
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "../actions";
import { Trash2 } from "lucide-react";
 
export function RemoveButton({ productId }: { productId: string }) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
 
	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(productId);
					router.refresh();
				})
			}
			className="w-fit disabled:cursor-wait disabled:text-slate-400 hover:bg-slate-200 "
		>
			<Trash2 size={18} />
		</button>
	);
}