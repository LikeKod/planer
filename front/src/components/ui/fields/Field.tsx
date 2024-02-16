import { forwardRef } from "react"

interface InputFieldProps {
    id: string
    label: string
    extra?: string
    placeholder: string
    variant?: string
    state?: 'error' | 'success'
    disabled?: boolean
    type?: string
    isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
(
    {
        label,
        id,
        extra,
        type, 
        placeholder,
        state,
        disabled,
        isNumber
    },
    ref
)=>{
    return (
        <div className={`${extra}`}>
            <label htmlFor={id} className={`text-sm text-white dark:text-white ml-1.5 font-medium`}>
                {label}
            </label>
            <input ref={ref} disabled={disabled} type={type} id={id} placeholder={placeholder} className={`mt-2 flex w-full items-center justify-center rounded-lg border border-border bg-white p-3 text-base outline-none placeholder:text-white placeholder:font-normal duration-500 transition-colors focus:border-primary ${disabled === true ? '!border-none !bg-gray-100 dark:!bg-white'}`}
        </div>
    )
})