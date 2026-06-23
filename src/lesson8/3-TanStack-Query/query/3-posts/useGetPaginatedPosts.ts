import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {useApi} from "../../useApi.ts";

interface Post {
    id: string;
    title: string;
    body: string;
    userId: string;
}

export const useGetPaginatedPosts = ({ limit, offset }: { limit: number; offset: number }) => {
    const { get } = useApi<Post[]>();

    return useQuery({
        queryKey: ['posts', limit, offset],
        queryFn: async (): Promise<Post[]> => {
            return get({ route: `posts?_start=${offset}&_limit=${limit}` });
        },
        placeholderData: keepPreviousData,
        // refetchInterval: 2000
    });
};
