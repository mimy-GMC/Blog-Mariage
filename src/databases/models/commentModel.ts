import mongoose from "mongoose";
import { CommentSchema } from "../schemas/commentSchema";
export const CommentModel = mongoose.model('Comments', CommentSchema);
