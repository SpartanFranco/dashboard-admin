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
import { useActionState, useEffect } from 'react';

import { X } from 'lucide-react';
import { authenticate } from '@/app/api/actions/authenticate';
import clsx from 'clsx';

const formSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(6, { message: 'Must be 6 or more characters long' })
		.max(16, { message: 'Must be 16 or fewer characters long' }),
});

export function LoginForm() {
	const [state, formAction, isPending] = useActionState(
		authenticate,
		undefined,
	);
	useEffect(() => {
		if (state === 'Success') {
			console.log({ state });
			window.location.replace('/');
		}
	}, [state]);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	return (
		<Form {...form}>
			<form
				action={formAction}
				className='flex flex-col space-y-8'
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email Address</FormLabel>
							<FormControl>
								<Input
									placeholder='Email Address'
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder='password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					disabled={isPending}
				>
					Login
				</Button>

				<div
					className='flex h-8 items-end space-x-1'
					aria-live='polite'
					aria-atomic='true'
				>
					{state && (
						<p
							className={clsx('text-sm text-red-500', {
								'text-green-500': state === 'Success',
							})}
						>
							{state}
						</p>
					)}
				</div>
			</form>
		</Form>
	);
}
