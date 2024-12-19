'use client';

import { Trash2 } from 'lucide-react';
import { UUID } from 'node:crypto';
import React from 'react';
import { Button } from '../ui/button';

interface Props {
	id: UUID;
}
export const ButtonDelete = ({ id }: Props) => {
	const handleDelete = async (id: UUID) => {
		//Todo delete product from db
	};
	return (
		<Button
			variant={'destructive'}
			onClick={() => handleDelete(id)}
		>
			<Trash2 />
		</Button>
	);
};
