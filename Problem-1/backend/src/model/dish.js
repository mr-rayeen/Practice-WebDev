import mongoose from 'mongoose';

const { Schema } = mongoose;

const dishSchema = new Schema({
    dishId: {
        type: Number,
        unique: true,
    },
    dishName: {
        type: String
    },
    imageUrl: {
        type:String
    },
    isPublished: {
        type:Boolean
    },
})

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;