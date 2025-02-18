import type { ComponentProps, ReactNode } from 'react';

interface ButtonsProps extends ComponentProps<'button'> {
	children: ReactNode;
}

export function Button(props: ButtonsProps) {
	return (
		<button
			className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
			{...props} /*Repassa todas as childedns do props passado na page*/
		/>
	);
}
