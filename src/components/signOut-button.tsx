'use client';
import { signOut } from '@/auth';

import React from 'react';
import { DropdownMenuItem } from './ui/dropdown-menu';
import { signout } from '@/app/api/actions/sign-out';

export const SignOutButton = () => {
	return <DropdownMenuItem onClick={signout}>Sign out</DropdownMenuItem>;
};
