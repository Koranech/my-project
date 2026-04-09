import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {getAllCars} from "../../services/api.service.ts";
import CarComponent from "../car/CarComponent.tsx";


const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars()
            .then(value => {
                console.log(value)
                setCars(value)
            })
    }, []);
    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/> )
            }

        </div>
    );
};

export default CarsComponent;
