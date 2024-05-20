import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as MongooseSchema } from '@nestjs/mongoose';

export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}

@MongooseSchema({
    timestamps: true
})
export class Book extends Document {
    @Prop({ required: true })
    Title: string;

    @Prop()
    Description: string;

    @Prop({ required: true })
    Author: string;

    @Prop({ required: true })
    Price: number;

    @Prop({ type: String, enum: Category })
    Category: Category;

    @Prop({required: true})
    Year:number

    @Prop({required: true})
    id:number
}

export const BookSchema = SchemaFactory.createForClass(Book);
