import mongoose from "mongoose";
export const NewBlogSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    celebrantType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
},
{ 
    timestamps: true 
})
