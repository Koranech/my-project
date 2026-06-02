import {useForm} from "react-hook-form";
import * as Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCar, type ICar} from "./CarsPage.tsx";

const CarsFormPage = () => {

    const carValidator = Joi.object({
        brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required().messages({
            'string.pattern.base': 'Your brand value didnt match pattern'
        }),
        price: Joi.number().min(0).max(1000000).required().messages({
            'number.min': 'Min 0',
            'number.max': 'Max 1.000.000 (without points)'
        }),
        year: Joi.number().min(1990).max(2026).required().messages({
            'number.min' : 'Min 1990',
            'number.max' : 'Max 2026'
        }),
    })

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'all', resolver: joiResolver(carValidator)
    })

    const customHandler = (data: ICar) => {
        console.log(data)
        addCar(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text"{...register('brand')}/>
                    {errors.brand && <p>{errors.brand.message}</p>}
                </label>
                <label>
                    <input type="number"{...register('price')}/>
                    {errors.price && <p>{errors.price.message}</p>}
                </label>
                <label>
                    <input type="number"{...register('year')}/>
                    {errors.year && <p>{errors.year.message}</p>}
                </label>


                <button disabled={!isValid}>sent</button>
            </form>
        </div>
    );
};

export default CarsFormPage;
