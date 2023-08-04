import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';

@Module({
  imports: [RestauranteModule, MongooseModule.forRoot('mongodb+srv://rianperigo:rianperigo@cluster0.ogxzwga.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
