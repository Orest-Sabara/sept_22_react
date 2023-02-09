import Joi from 'joi';

const carValidator = Joi.object({
    brand:Joi.string().regex(/[a-zA-Zа-яА-яіІїЇ]{1,20}$/).required(),
    price:Joi.number().min(-200).max(1000000).required(),
    year:Joi.number().min(1000).max(new Date().getFullYear()).required()
})

export {
    carValidator
}