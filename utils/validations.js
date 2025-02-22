const joi = require("joi");

const authValidation = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(10).max(50).required().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{10,}$')).message('Password must be at least 10 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.').required()
});

const cartValidation = joi.object({
    userId: joi.string().required(),
    items: joi.array().items(joi.object({
        productId: joi.string().required(),
        quantity: joi.number().integer().min(1).required()
    })).required()
});

const orderValidation = joi.object({
    userId: joi.string().required(),
    items: joi.array().items(joi.object({
        productId: joi.string().required(),
        quantity: joi.number().integer().min(1).required()
    })).required(),
    totalAmount: joi.number().required(),
    shippingAddress: joi.string().required(),
    paymentMethod: joi.string().required()
});

const productValidation = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    stock: joi.number().integer().min(0).required(),
    category: joi.string().required()
});

module.exports = {
    authValidation,
    cartValidation,
    orderValidation,
    productValidation
};