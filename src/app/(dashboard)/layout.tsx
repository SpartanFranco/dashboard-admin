import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';

import { Navbar } from '@/components/navbar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full bg-slate-200/15 dark:bg-background'>
				<Navbar />
				{children}
			</main>
		</SidebarProvider>
	);
}
