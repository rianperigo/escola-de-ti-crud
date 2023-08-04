import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestauranteDocument = Document<Restaurante>;

@Schema()
export class Restaurante {
  @Prop()
  nome: string;

  @Prop()
  descricao: string;

  @Prop()
  categoriarestaurante: string;

  @Prop()
  categoriaentrega: string;

  @Prop()
  numerotelefone: string;

  @Prop()
  endereço: string;

  @Prop()
  instagram: string;

  @Prop()
  numerowhatsapp: string;
}

export const RestauranteSchema = SchemaFactory.createForClass(Restaurante);