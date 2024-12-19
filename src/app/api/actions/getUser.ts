'use server';

interface User {
	name: string;
	email: string;
	password: string;
}

export async function getUser(email: string): Promise<User | undefined> {
	try {
		return {
			name: 'Geovani franco',
			email: 'geovani@gmail.com',
			password: '123456',
		};
	} catch (error) {
		console.error('Failed to fetch user:', error);
		throw new Error('Failed to fetch user.');
	}
}
