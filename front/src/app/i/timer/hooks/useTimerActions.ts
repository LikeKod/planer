import { IPomodoroRoundResponse } from '@/types/pomodoro.types'
import type { ITimerState } from '../timer.types'
import { useLoadingSettings } from './useLoadingSettings'
import { useUpdateRound } from './useUpdateRound'

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined
}

export function useTimerActions({
	activeRound,
	setIsRunning,
	secondsLeft,
	rounds,
	setActiveRound,
}: TypeUseTimerActions) {
	const { workInterval } = useLoadingSettings()
	const { isUpdateRoundPending, updateRound } = useUpdateRound()
	const pauseHandler = () => {
		setIsRunning(false)

		if (!activeRound?.id) return
		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: secondsLeft,
				isCompleted: Math.floor(secondsLeft / 60) >= workInterval,
			},
		})
	}

	const playHandler = () => {
		setIsRunning(true)
	}

	const nextRoundHanler = () => {
		if (!activeRound?.id) return
		updateRound({
			id: activeRound?.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60,
			},
		})
	}

	const prevRoundHandler = () => {
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)

		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: 0,
			},
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isUpdateRoundPending,
		pauseHandler,
		nextRoundHanler,
		playHandler,
		prevRoundHandler,
	}
}
