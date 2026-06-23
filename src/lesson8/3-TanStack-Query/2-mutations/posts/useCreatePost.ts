import {useApi} from "../../useApi.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface RequestProps {
    title: string,
    body: string,
    userId: string,
    error?: string
}

interface Response extends Omit<RequestProps, 'userId'> {
    id: number,
    userId: number
}

export const useCreatePost = () => {
    const {post} = useApi<Response>()

    const queryClient= useQueryClient()

    const route = '/posts';

    return useMutation({
        mutationFn: async ({title, body, userId}: RequestProps): Promise<Response> => {
            return post({
                route,
                body: {title, body, userId},
            });
        },
        onSuccess: async (data) => {
            if (data && !data.error) {
               await queryClient.refetchQueries({queryKey: ['posts', 10, 10]})
            }

        },
        onError: (error) => {
            console.log(error);
        },
        retry: false,
    });
}
