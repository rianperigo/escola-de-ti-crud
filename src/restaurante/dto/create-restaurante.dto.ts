import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
export class CreateRestauranteDto {

@IsString()
@IsNotEmpty()
nome:string;

@IsString()
@IsNotEmpty()
@MaxLength(300)
descricao: string;

@IsString()
@IsNotEmpty()
categoriarestaurante: string;

@IsString()
@IsNotEmpty()
categoriaentrega: string;

@IsString()
@IsNotEmpty()
pratos:string;

@IsString()
@IsNotEmpty()
numerotelefone: string;

@IsString()
@IsNotEmpty()
endereço: string;

@IsString()
instagram: string;

@IsString()
numerowhatsapp: string;

}
