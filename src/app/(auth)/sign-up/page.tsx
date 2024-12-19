import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CreateForm } from './ui/CreateForm';
import Image from 'next/image';

export default function CreateAccountPage() {
	return (
		<div className='flex h-screen w-full items-center justify-center p-10'>
			<Card className='w-[25rem]'>
				<CardHeader className='text-center'>
					<CardTitle className='text-2xl font-extrabold tracking-tight'>
						Create an account
					</CardTitle>
					<p>Enter your email below to create your account</p>
				</CardHeader>

				<CardContent>
					<CreateForm />
				</CardContent>
			</Card>
		</div>
	);
}
