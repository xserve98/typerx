/// <reference types="mongoose" />
import { Document } from 'mongoose';
export interface Widget extends Document {
    name: string;
}
