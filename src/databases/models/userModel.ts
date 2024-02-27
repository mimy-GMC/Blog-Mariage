import mongoose from "mongoose";
import { UserSchema } from "../schemas/userSchema";
export const UserModel = mongoose.model('Users', UserSchema);
