import axios from "axios";
import type {ICar} from "../models/ICar.ts";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_CARS_API_URL,
    headers: {"Content-Type": "application/json"},
})

export const getAllCars =  async (): Promise<ICar[]> => {
        const {data} =  await axiosInstance.get<ICar[]>("/cars");
        return data
}

export const addCar = async (car: ICar) => {
      await axiosInstance.post("/cars", car);
}
