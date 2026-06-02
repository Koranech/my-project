import {useSelector} from "react-redux";
import {store} from "../stores/store.ts";

export const useAppSelector = useSelector.withTypes <ReturnType<typeof store.getState>>()
