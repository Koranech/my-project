import {useApi} from "../../useApi.ts";
import {useQuery} from "@tanstack/react-query";

interface IUser {
    id: string,
    name: string,
}

export const useGetUsers = () => {
    const {get} = useApi<IUser[]>()

    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            return get({route: '/1-users'})
        },
        // staleTime: Infinity - час життя хеша, до перезавантаження сторінки
    })
}
