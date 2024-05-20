import { Category } from "../schemas/book.schema"
import { IsString, IsInt } from 'class-validator';

export class UpdateBookDto{
    @IsString()
    readonly Title: string;

    @IsString()
    readonly Description: string;

    @IsString()
    readonly Author: string;

    @IsInt()
    readonly Price: number;

    @IsString()
    readonly Category: Category;

    @IsInt()
    readonly Year: number;
    
    @IsInt()
    readonly id: number

}