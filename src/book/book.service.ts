import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel:mongoose. Model<Book>
    ) {}

    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const newBook = new this.bookModel(createBookDto);
        return newBook.save();
    }
    
    async findById(id: string): Promise<Book | null> {
        const book = await this.bookModel.findById(id).exec();
        
        if(!book){
            throw new NotFoundException('Book not found')
        }
        return book;
    }

    
    async UpdateById(id: string, updateBookDto: UpdateBookDto): Promise<Book | null> {
        const updatedBook = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {
            new: true, 
            runValidators: true 
        }).exec();
    
        return updatedBook;
    }

    async DeleteById(id: string): Promise<Book | null> {
        const deletedBook = await this.bookModel.findByIdAndDelete(id ).exec();
    
        return deletedBook;
    }


    
}    
