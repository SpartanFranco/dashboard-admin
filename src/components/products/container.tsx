import React from 'react';
import { Status } from '../../interfaces/product';
import { ModalProduct } from '../modal/modal-product';
import ProductsTable from './products-table';

import { getProducts } from '@/app/api/actions/getProducts';
interface Props {
	status?: Status;
}
const ContainerProducts = async ({ status }: Props) => {
	const table = await getProducts(status);
	return (
		<div className='w-full'>
			<section className='flex w-full flex-wrap items-center justify-between bg-slate-900 p-5'>
				<h1 className='font-bold text-white'>List Products</h1>
				<ModalProduct />
			</section>
			<div className='overflow-x-auto'>
				<ProductsTable
					table={table}
					status={status}
				/>
			</div>
		</div>
	);
};

export default ContainerProducts;
