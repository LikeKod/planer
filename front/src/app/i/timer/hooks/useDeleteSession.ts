import { pomodoroService } from '@/services/pomodoro.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete session'],
		mutationFn: (id: string) => pomodoroService.deleteSession(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['delete session'],
				// setSecondsLeft(workInterval*60)
			}),
				onDeleteSuccess()
		},
	})

	return { deleteSession, isDeletePending }
}
