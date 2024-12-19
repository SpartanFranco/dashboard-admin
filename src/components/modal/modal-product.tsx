import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { FormCreateOrUpdateProduct } from './form-product';
import { SquarePen, CirclePlus } from 'lucide-react';

export function ModalProduct({ edit = false }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={'secondary'}
					className={`${edit ? 'bg-blue-600/50 hover:bg-blue-600/30' : ' '}`}
				>
					{edit ? <SquarePen /> : <CirclePlus />}
					{edit ? '' : 'Add product'}
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogTitle>{edit ? 'Edit Product' : 'Create Product'}</DialogTitle>
				<DialogHeader>
					<DialogDescription>
						{edit
							? 'Edit this product and save to your store with this form'
							: 'Add a new product to your store with this form.'}
					</DialogDescription>
				</DialogHeader>
				<FormCreateOrUpdateProduct />
			</DialogContent>
		</Dialog>
	);
}
