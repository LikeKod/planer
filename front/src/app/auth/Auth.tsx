'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { Heading } from '@/components/ui/Heading'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { toast } from 'sonner'
import '../globals.scss'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex mi-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-lg p-layout'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Auth' />

				<Field
					id='email'
					label='Email'
					placeholder='Enter Email'
					type='email'
					extra='mb-4'
					{...register('email', { required: 'Email is required!' })}
				/>

				<Field
					id='password'
					label='Password'
					placeholder='Enter password'
					type='password'
					extra='mb-6'
					{...register('password', { required: 'Password is required!' })}
				/>

				<div className='flex items-center gap-5 justify-center'>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>Register</Button>
				</div>
			</form>
		</div>
	)
}
