import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem vindo à API avanade!';
  }
  getLogin(): string {
    return 'Aqui virá o login do usuário';
  }
  getRegister(): string {
    return 'Aqui virá o cadastro do usuário';
  }
 
}
