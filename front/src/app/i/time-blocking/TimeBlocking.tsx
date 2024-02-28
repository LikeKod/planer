'use client'

import type { TimeBlockFormState } from '@/types/time-block.types'
import { FormProvider, useForm } from 'react-hook-form'
import { TimeBlockingForm } from './form/TimeBlockingForm'
import { TimeBlockingList } from './TimeBlockingList'

export function TimeBlocking() {
	const methods = useForm<TimeBlockFormState>()

	return (
		<FormProvider {...methods}>
			<div className='grid grid-cols-2 gap-12'>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
