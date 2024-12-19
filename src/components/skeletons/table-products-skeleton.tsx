import React from 'react';

const TableProductsSkeleton = () => {
	return (
		<tbody className='bg-slate-400/10'>
			{[1, 2, 3, 4, 5].map((item) => (
				<tr key={item}>
					<td className='p-2'>
						<div className='mx-auto h-4 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
					</td>
					<td className='p-2'>
						<div className='mx-auto h-4 w-32 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
					</td>
					<td className='p-2'>
						<div className='mx-auto h-4 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
					</td>
					<td className='p-2'>
						<div className='mx-auto h-4 w-12 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
					</td>
					<td className='p-2'>
						<div className='mx-auto h-4 w-20 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
					</td>
					<td className='p-2'>
						<div className='mx-auto flex items-center justify-center gap-2'>
							<div className='h-8 w-8 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
							<div className='h-8 w-8 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700' />
						</div>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableProductsSkeleton;
