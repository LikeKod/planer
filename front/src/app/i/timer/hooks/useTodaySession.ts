import { pomodoroService } from '@/services/pomodoro.service'
import { useQuery } from '@tanstack/react-query'

export function useTodaySession() {
	const {
		data: sessionResponse,
		isLoading,
		refetch,
		isSuccess,
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getTodaySession(),
	})

	return { sessionResponse, isLoading, refetch, isSuccess }
}
