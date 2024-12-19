'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import { UploadButton } from '@/utils/uploadthing';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
	title: z.string(),
	price: z.number().min(0).optional(),
	description: z.string().optional(),
	image: z.string().optional(),
});

export const FormCreateOrUpdateProduct = () => {
	const [photoLoaded, setPhotoLoaded] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			price: 0,
			description: '',
			image: '',
		},
	});
	const { isValid } = form.formState;

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log({ values });
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'
			>
				<div className='grid grid-cols-2 gap-3'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Product title</FormLabel>
								<FormControl>
									<Input
										placeholder='Product title...'
										type='text'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Product price</FormLabel>
								<FormControl>
									<Input
										placeholder='Product price...'
										type='number'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input
										placeholder='Product description ...'
										type='text'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='image'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Image Product</FormLabel>
								<FormControl>
									{photoLoaded ? (
										<p className='flex items-center justify-center text-sm'>
											Image uploaded
										</p>
									) : (
										<UploadButton
											className='outline-3 flex justify-center rounded-lg bg-slate-600/20 text-slate-800 outline-dotted'
											{...field}
											endpoint='imageUploader'
											onClientUploadComplete={(res) => {
												form.setValue('image', res?.[0].url);
												toast({ title: 'Photo uploaded' });
												setPhotoLoaded(true);
											}}
											onUploadError={(error: Error) => {
												toast({ title: 'Error uploading photo' });
											}}
										/>
									)}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button
					type='submit'
					disabled={!isValid}
				>
					Save
				</Button>
			</form>
		</Form>
	);
};
