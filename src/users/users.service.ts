import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { PrismaService } from '../prisma.service';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDTO) {
        const {name, email, password } = data;
        const user = await this.prisma.users.create({
            data: {
                name,
                email, //quando é o mesmo nome, não precisa colocar email: email. mas somente quando for exatemente igual
                password,
            },
        });
        if (!user) {
            throw new HttpException(
              {
                status: HttpStatus.FORBIDDEN,
                message: 'Erro ao criar usuário!',
              },
              HttpStatus.FORBIDDEN,
            );
          }
        return user;
    }
    async findAll(): Promise<String> {
        return 'Lista de usuários!';
    }
    async findOne(id: number): Promise<String> {
        return `Usuário &{id}!`;
    }
    async update(id: number, req: UpdateUserDTO): Promise<string> {
        return `Usuário ${id} atualizado com sucesso!`;
      }
}
