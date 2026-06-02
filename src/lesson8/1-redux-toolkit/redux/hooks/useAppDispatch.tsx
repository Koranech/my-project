import {useDispatch} from "react-redux";
import {store} from "../stores/store.ts";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
