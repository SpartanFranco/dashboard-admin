import { ButtonDelete } from './button-delete';
import clsx from 'clsx';
import { ChooseStatus } from '../filters/select-status';
import { ModalProduct } from '@/components/modal/modal-product';
import type { Product, Status } from '@/interfaces/product';
import { Suspense } from 'react';
import TableProductsSkeleton from '../skeletons/table-products-skeleton';
interface Props {
	table: Product[];
	status?: Status;
}

const ProductsTable = ({ table, status }: Props) => {
	return (
		<table className='w-full table-auto rounded-sm border'>
			<thead>
				<tr className='bg-slate-700/30 dark:bg-background'>
					<th className='p-2'>
						<ChooseStatus status={status} />
					</th>
					<th className='p-2'>Title</th>
					<th className='p-2'>Price</th>
					<th className='p-2'>Stock</th>
					<th className='p-2'>Type</th>
					<th className='p-2'>Actions</th>
				</tr>
			</thead>
			<Suspense fallback={<TableProductsSkeleton />}>
				<tbody className='bg-slate-300/10 text-xs md:text-sm'>
					{table.map(({ id, status, title, stock, price, type }) => (
						<tr key={id}>
							<td
								className={clsx(`p-2 text-center`, {
									'text-green-500': status == 'success',
									'text-red-500': status == 'failed',
									'text-blue-500': status == 'pending',
								})}
							>
								{status}
							</td>
							<td className='p-2 text-center'>{title}</td>
							<td className='p-2 text-center'>${price}</td>
							<td className='p-2 text-center'>{stock}</td>
							<td className='p-2 text-center'>{type}</td>
							<td className='flex items-center justify-center gap-2 p-2'>
								<ModalProduct edit={true} />
								<ButtonDelete id={id} />
							</td>
						</tr>
					))}
				</tbody>
			</Suspense>
		</table>
	);
};

export default ProductsTable;
