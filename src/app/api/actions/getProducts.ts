import { Product, Status } from '@/interfaces/product';

const products: Product[] = [
	{
		id: `213sd-adsa32-soidoisa43-ewo32-dsafs`,
		title: 'Martillo',
		stock: 8,
		price: 23,
		status: 'pending',
		type: 'physical',
	},
	{
		id: `4213sd-adasdsa32-soidoifdsa43-ew-dsafs`,
		title: 'Curso de HTML5 y CSS3',
		stock: 14,
		price: 15,
		status: 'success',
		type: 'digital',
	},
	{
		id: `4213sd-a32-soidoifdsa43-ew-dsafs`,
		title: 'corto ',
		stock: 14,
		price: 15,
		status: 'failed',
		type: 'physical',
	},
];

export async function getProducts(status?: Status): Promise<Product[]> {
	// await new Promise((res, rej) => {
	// 	setTimeout(() => {
	// 		return res;
	// 	}, 2000);
	// });
	if (status) {
		return products.filter((p) => p.status === status);
	}
	return products;
}
