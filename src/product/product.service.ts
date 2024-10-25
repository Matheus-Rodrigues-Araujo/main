import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    private readonly httpService: HttpService,
  ) {}

  async all(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return new this.productModel(createProductDto).save();
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findOne({ id });
  }

  async update(id: number, product: any): Promise<any> {
    return this.productModel.findOneAndUpdate({ id }, product);
  }

  async delete(id: number): Promise<void> {
    await this.productModel.deleteOne({ id });
  }
}
