import { IsEmail } from "class-validator"
import { IsString, MinLength } from "class-validator/types/decorator/decorators"


export class AuthDto {
    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    @IsString()
    password: string
}