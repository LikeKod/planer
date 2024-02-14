import {
	Controller
} from '@nestjs/common'
import { PomodoroService } from './pomodoro.service'

@Controller('user/timer')
export class PomodoroController {
	constructor(private readonly PomodoroService: PomodoroService) {}

	
}
