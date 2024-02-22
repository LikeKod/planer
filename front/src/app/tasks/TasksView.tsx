'use client'

import Loader from '@/components/ui/Loader'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ListView } from './list-view/ListView'

export type TypeView = 'list' | 'kanban'

export function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list',
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<ListView />
		</div>
	)
}
