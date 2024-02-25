'use client'

import { DragDropContext } from '@hello-pangea/dnd'
import { COLUMNS } from '../columns.data'
import { useTaskDnd } from '../hooks/useTaskDnd'
import { UseTasks } from '../hooks/UseTasks'
import { KanbanRowParent } from './KanbanColumn'
import styles from './KanbanView.module.scss'

export function KanbanView() {
	const { items, setItems } = UseTasks()

	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(column => (
					<KanbanRowParent
						key={column.value}
						value={column.value}
						label={column.label}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
