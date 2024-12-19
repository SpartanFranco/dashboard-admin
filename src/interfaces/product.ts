import { UUID } from 'crypto';

export interface Product {
	id: UUID;
	title: string;
	stock: number;
	price: number;
	status: Status;
	type: ProductType;
}
export type ProductType = 'digital' | 'physical';
export type Status = 'success' | 'pending' | 'failed' | 'failed' | 'all';
