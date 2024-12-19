'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { StatusPosition } from '@/interfaces/status.type';

interface Props {
	status: StatusPosition | undefined;
}

const statusPosition: Array<{ status: StatusPosition; href: string }> = [
	{
		status: 'all',
		href: '',
	},
	{ status: 'failed', href: 'failed' },
	{
		status: 'success',
		href: 'success',
	},
	{
		status: 'pending',
		href: 'pending',
	},
];
export function ChooseStatus({ status }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='font-semibold'
				>
					Status
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Choose Status</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={status ?? 'all'}>
					{statusPosition.map((s) => (
						<DropdownMenuRadioItem
							key={s.status}
							value={s.status}
						>
							<Link
								shallow={s.status == 'all'}
								href={`/products/${s.href}`}
								className='w-full capitalize'
							>
								{s.status}
							</Link>
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
