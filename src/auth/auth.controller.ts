import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {} 
//esse readonly é como o const, essa linha faz o injectable

    @Post('login')
    async authLogin(@Body() req){
        const { login, password } = req;
        console.log("Login: ", login);
        console.log("senha: ", password);
        if(!login){
            throw new HttpException('Login não informado', HttpStatus.BAD_REQUEST);
        }
        return this.authService.authLogin(login, password)
    }
}
