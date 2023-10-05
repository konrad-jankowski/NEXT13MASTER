import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "shoes" }, { category: "skateboards" }];
};

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children;
}
