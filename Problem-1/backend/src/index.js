import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {getDish, getToggle} from "../src/controller/dish.js";

const app = express();
const PORT = 4444;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/get-dishes', getDish);
app.post('/toggle',getToggle)

mongoose.connect("mongodb://127.0.0.1:27017/DishDB").then(() => {
    app.listen(PORT, () => console.log(`Listening on port :`+ PORT));
})