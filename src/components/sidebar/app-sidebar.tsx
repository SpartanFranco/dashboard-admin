import { Calendar, DollarSign, Home, Inbox, Settings } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const items = [
	{
		title: 'Home',
		url: '/',
		icon: Home,
	},
	{
		title: 'Products',
		url: '/products',
		icon: Inbox,
	},
	{
		title: 'Payments',
		url: '/payments',
		icon: DollarSign,
	},
	{
		title: 'Calendar',
		url: '/calendar',
		icon: Calendar,
	},
	{
		title: 'Settings',
		url: '/settings',
		icon: Settings,
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible='icon'>
			<SidebarContent className='bg-gradient-to-b from-violet-600 to-indigo-600 dark:from-gray-900 dark:to-gray-700'>
				<SidebarGroup>
					<SidebarGroupLabel className='Font-bold text-2xl text-white'>
						My Dashboard
					</SidebarGroupLabel>

					<SidebarGroupContent>
						<SidebarMenu className='text-white'>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
