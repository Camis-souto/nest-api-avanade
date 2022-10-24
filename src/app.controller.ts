import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // esta apenas redirecionando o usuário para o serviço correto.
    return this.appService.getHello();
  }
  @Get('/login')
  getLogin(): string {
    // esta apenas redirecionando o usuário para o serviço correto.
    return this.appService.getLogin();
  }
  @Get('/register')
  getRegister(): string {
    // esta apenas redirecionando o usuário para o serviço correto.
    return this.appService.getRegister();
  }
}
