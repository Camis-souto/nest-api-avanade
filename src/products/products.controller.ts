import { Controller, Body,Post, Get, Patch, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateProductsDTO } from './dto/createProducts.dto';
import { ProductsService } from './products.service';
import { UpdateProductsDTO } from './dto/updateProducts.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {} 

    @Post()
    create(@Body () req: CreateProductsDTO){
        return this.productsService.create();
    }

    @Get()
    findAll(){
        return this.productsService.findAll();
    }
       
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: number) {
        return this.productsService.findOne(id);
    }
    
    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpdateProductsDTO) {
          return this.productsService.update(id, req);
    }
}
