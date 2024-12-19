import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ToggleTheme } from './toggle-theme';
import { UserButton } from './user-button';
import { SidebarTrigger } from './ui/sidebar';

export const Navbar = () => {
	return (
		<nav className='flex h-20 w-full items-center justify-between gap-x-4 border-b bg-background px-2 md:px-6'>
			<SidebarTrigger className='-ml-4 -mt-4' />
			<section className='flex items-center gap-x-2'>
				<div className='relative w-[200px] lg:w-[300px]'>
					<Input
						placeholder='Search...'
						className='rounded-lg'
					/>
					<Search
						strokeWidth={1}
						className='absolute right-2 top-2'
					/>
				</div>
				<div className='flex items-center gap-x-2'>
					<ToggleTheme />
					<UserButton />
				</div>
			</section>
		</nav>
	);
};
