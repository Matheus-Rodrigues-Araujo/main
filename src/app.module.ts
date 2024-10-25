import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.production'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    ProductModule,
    HttpModule
  ],
})
export class AppModule {}
