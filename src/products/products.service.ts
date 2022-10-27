import { Injectable } from '@nestjs/common';
import { UpdateProductsDTO } from './dto/updateProducts.dto';

@Injectable()
export class ProductsService {

    async create(): Promise<String> {
        return 'Produto cadastrado com sucesso!';
    }
    async findAll(): Promise<String> {
        return '';
    }
    async findOne(id: number): Promise<String> {
        return `Usuário &{id}!`;
    }
    async update(id: number, req: UpdateProductsDTO): Promise<string> {
        return `Usuário ${id} atualizado com sucesso!`;
      }



}
