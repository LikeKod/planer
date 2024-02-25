import type { ITaskResponse } from '@/types/task.types'
import { type Dispatch, type SetStateAction } from 'react'

interface IKanbanAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddRowInput({ setItems, filterDate }: IKanbanAddRowInput) {
	const addCard = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate,
				},
			]
		})
	}

	return (
		<div className='mt-5'>
			<button onClick={addCard} className='italic opacity-40 text-sm'>
				Add Task...
			</button>
		</div>
	)
}
