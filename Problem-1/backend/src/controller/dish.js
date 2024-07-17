import Dish from '../model/dish.js';

export const getDish = async (req, res) => {
    try {
        
        let dish = await Dish.find({});
        res.send(dish)
    } catch (error) {
        throw new Error("Error in fetching all Dish", error.message);
    }
}

export const getToggle = async (req, res) => {
    let { dishId } = req.body;
    let id = Number(dishId);
    try {
        let dish = await Dish.findOne({
            dishId: id
        })
        
        dish.isPublished = !dish.isPublished;
        await dish.save();
        res.status(200).json({
			dish
		});
    } catch (error) {
        throw new Error(`Error in finding Dish with Id: ${id}`, error.message);
    }
}