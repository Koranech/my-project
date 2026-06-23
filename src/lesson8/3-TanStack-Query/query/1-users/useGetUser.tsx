import {useApi} from "../../useApi.ts";
import {useQuery} from "@tanstack/react-query";

interface IUser {
    id: string,
    name: string,
}

export const useGetUser = ({userId}: {userId: string}) => {
    const {get} = useApi<IUser>()

    return useQuery({
        queryKey: ['users', userId],
        queryFn: async () => {
            return get({route: `/users/${userId}`})
        },
        // staleTime: Infinity - час життя хеша, до перезавантаження сторінки
    })
}
