import mongoose from 'mongoose';
import { NewBlogSchema } from "../schemas/blogSchema";
export const NewBlogModel = mongoose.model('Article', NewBlogSchema);

