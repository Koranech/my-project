import axios from 'axios';

type AxiosUpdateData<TData, TBody> = ({route, body,}: {
    route: string;
    body: TBody;
}) => Promise<TData>;

interface Output<TData, TBody> {
    get: ({route}: { route: string }) => Promise<TData>;
    post: AxiosUpdateData<TData, TBody>;
    put: AxiosUpdateData<TData, TBody>;
    deleteEntity: ({route}: { route: string }) => Promise<null>;
}

const API_URL = 'https://jsonplaceholder.typicode.com';

export const useApi = <T, TBody = any>(): Output<T, TBody> => {
    const getApiPath = (route: string): string => `${API_URL}/${route}`;

    const get = async ({route}: { route: string }): Promise<T> => {
        try {
            const {data} = await axios.get(getApiPath(route));
            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }
        }
        throw new Error('Network Error');
    };

    const post = async ({route, body}: { route: string; body: TBody }): Promise<T> => {
        try {
            const {data} = await axios.post(getApiPath(route), {...body});
            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }
        }
        throw new Error('Network Error');
    };

    const put = async ({route, body}: { route: string; body: TBody }): Promise<T> => {
        try {
            const {data} = await axios.put(getApiPath(route), {...body});
            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }
        }
        throw new Error('Network Error');
    };

    const deleteEntity = async ({route}: { route: string }): Promise<null> => {
        try {
            const {data} = await axios.delete(getApiPath(route));
            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }
        }
        throw new Error('Network Error');
    };

    // Повертаємо об'єкт з усіма методами зсередини функції useApi
    return {
        get,
        post,
        put,
        deleteEntity,
    };
};
