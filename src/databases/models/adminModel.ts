import mongoose from "mongoose";
import { AdminBlogSchema } from '../schemas/adminSchema';
export const AdminBlogModel = mongoose.model('Admin', AdminBlogSchema);
