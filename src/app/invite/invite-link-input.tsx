'use client';

import { IconButton } from '@/components/icon-button';
import { InputFilds, InputIcon, InputRoot } from '@/components/input';
import { Copy, Link } from 'lucide-react';

export function InviteLinkInput() {
	function copyInviteLink() {
		console.log('Hello Word');
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputFilds
				readOnly
				defaultValue="http://localhost:3000/invite/135418564151hg16156"
			/>
			<IconButton className="-mr-2" onClick={copyInviteLink}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
}
