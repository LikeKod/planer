import Loader from '@/components/ui/Loader'
import { closestCenter, DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { calcLeftTime } from './calc_left_time'
import { useTimeBlockDnd } from './hooks/useTimeBlockDnd'
import { useTimeBlocks } from './hooks/useTimeBlocks'
import { TimeBlock } from './TimeBlock'
import styles from './TimeBlock.module.scss'

export function TimeBlockingList() {
	const { isLoading, items, setItems } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (isLoading) return <Loader />

	const { hoursLeft } = calcLeftTime(items)

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items?.map(item => <TimeBlock key={item.id} item={item} />)
						) : (
							<div>Add the first time-block on the right</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				{hoursLeft > 0
					? `${hoursLeft} hours out of 24 left for sleep`
					: 'No hours left for sleep'}
			</div>
		</div>
	)
}
