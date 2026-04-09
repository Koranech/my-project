import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import './CarsForm.css'

const CarsForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        addCar(data)
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <div className={'input'}>
                    <h2>Brand</h2>
                    <input type="text" {...register('brand')}/>
                    <p>{errors.brand?.message}</p>
                </div>

                <div className={'input'}>
                    <h2>Year</h2>
                    <input type="number" {...register('year')}/>
                    <p>{errors.year?.message}</p>
                </div>

                <div className={'input'}>
                    <h2>Price</h2>
                    <input type="number" {...register('price')}/>
                    <p>{errors.price?.message}</p>
                </div>
                <button>save car</button>
            </form>
        </div>
    );
};

export default CarsForm;
