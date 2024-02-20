import { Heading } from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/ceo.constants'
import { Metadata } from 'next'
import { Settings } from './Settings'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE,
}

export default function SettingsPage() {
	return (
		<div>
			<Heading title='Settings' />
			<Settings />
		</div>
	)
}
