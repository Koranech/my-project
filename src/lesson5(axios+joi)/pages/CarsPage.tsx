import axios from 'axios';
import {useEffect, useState} from "react";

export interface ICar {
    id: number,
    brand: string,
    price: number,
    year: number
}

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});

export const getCars = async (): Promise<ICar[]> => {
    const {data: cars} = await axiosInstance.get("/cars");
    console.log(cars)
    return cars;
}

export const addCar = async (car: ICar) => {
    await axiosInstance.post("/cars", car)
    console.log(car)
}

////////////////////////////////////////////////////////////////////////////
const CarsPage = () => {

    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, []);
    return (
        <div>
            {
                cars.map(car => <div key={car.id}>
                    {car.id} - {car.brand} - {car.price} $
                </div>)
            }
        </div>
    );
};

export default CarsPage;
