import ContainerProducts from '@/components/products/container';

import { Status } from '@/interfaces/product';

interface Props {
	params: Promise<{ status: Status }>;
}

export default async function StatusProductPage({ params }: Props) {
	const { status } = await params;

	console.log(status);
	return <ContainerProducts status={status} />;
}
