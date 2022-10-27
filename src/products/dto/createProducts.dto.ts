import { IsNegative, 
    IsNotEmpty, 
    IsNumber, 
    IsPositive, 
    IsString } 
    from "class-validator";


export class CreateProductsDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    @IsNegative()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;


}