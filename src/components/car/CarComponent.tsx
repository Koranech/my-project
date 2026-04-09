import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";
import './CarComponent.css'

type CarPropsType = {
    car: ICar
}

const CarComponent: FC<CarPropsType> = ({car}) => {
    return (
        <div className={'car'}>
            <h6>ID - {car.id}</h6>
            <h2>{car.brand} - {car.year}</h2>
            <h3>{car.price} uah</h3>
            <hr/>
        </div>
    );
};

export default CarComponent;
