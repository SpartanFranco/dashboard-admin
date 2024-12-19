import Link from 'next/link';
import { LoginForm } from './ui/LoginForm';
import {
	Card,
	CardContent,
	CardHeader,
	CardDescription,
	CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
	return (
		<div className='flex h-screen w-full items-center justify-center p-10'>
			<Card className='w-[25rem]'>
				<CardHeader className='text-center'>
					<CardTitle className='text-2xl font-extrabold tracking-tight'>
						Welcome
					</CardTitle>
					<CardDescription className='text-slate-500'>
						Don't have an account?
						<Link
							href='/sign-up'
							className='text-black'
						>
							Register
						</Link>
					</CardDescription>
				</CardHeader>

				<CardContent>
					<LoginForm />
				</CardContent>
			</Card>
		</div>
	);
}
