import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .min(1).max(20).required()
        .messages({
            "string.pattern.base": "неправильно заповнили інпут",
            "string.min": "мінімальна кількість символів - 1",
            "string.max": "максиммальна кількість символів - 20",
        }),
    year: Joi.number().min(1990).max(2026).required()
        .messages({
            "number.min": "мінімальна рік - 1990",
            "number.max": "максимальний рік - 2026"
        }),
    price: Joi.number().min(0).max(1000000).required()
        .messages({
            "number.min": "мінімальна ціна - 0",
            "number.max": "максимальна ціна - 1.000.000 (без точок)"
        })
})
