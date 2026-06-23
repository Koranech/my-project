import {Fragment, useCallback, useState} from "react";
import {useGetPaginatedPosts} from "./query/3-posts/useGetPaginatedPosts.ts";
import {useCreatePost} from "./2-mutations/posts/useCreatePost.ts";


const DEFAULT_LIMIT = 10;
const TOTAL_PAGES = 10;
const PostsPagination = () => {
    const [pagination, setPagination] = useState<{ limit: number; offset: number }>({
        limit: DEFAULT_LIMIT,
        offset: 0,
    });

    const {
        isFetching: isPaginatedPostFetching,
        refetch,
        data: paginatedPosts,
    } = useGetPaginatedPosts(pagination);

    console.log(paginatedPosts);

    const {mutateAsync: createPostRequest} = useCreatePost()
    const handleCreatePost = useCallback(
        async () =>
        // try {
        //     const response = await createPostRequest({
        //         title: 'Titile test',
        //         body: 'body test',
        //         userId: '1'
        //     })
        //     if (!response) {
        //         return
        //     }
        //     console.log(response)
        //     refetch()
        //
        // } catch (e) {
        //     console.log(e)
        //     throw e;
        // }
        await createPostRequest({
            title: 'Title test',
            body: 'body  test',
            userId: '1'
        }), [])

    const handleChangePage = async (offset: number): Promise<void> => {
        setPagination((prevState) => ({...prevState, offset}));
        await refetch();
    };

    if (isPaginatedPostFetching) return <div>Loading ...</div>;
    if (!paginatedPosts) {
        return null;
    }

    return (
        <>
            {paginatedPosts.map((item) => (
                <Fragment key={item.id}>
                    <div>id: {item.id}</div>
                    <div>title: {item.title}</div>
                    <div>body: {item.body}</div>
                    <div>userId: {item.userId}</div>
                </Fragment>
            ))}
            <button onClick={handleCreatePost}>Create new post</button>
            <div>
                <button onClick={() => handleChangePage(0)} disabled={pagination.offset === 0}>
                    Перша
                </button>
                <button
                    onClick={() => handleChangePage(pagination.offset - pagination.limit)}
                    disabled={pagination.offset === 0}
                >
                    Попередня
                </button>

                <span>Сторінка {pagination.offset / pagination.limit + 1}</span>
                <button
                    onClick={() => handleChangePage(pagination.offset + pagination.limit)}
                    disabled={pagination.offset === (TOTAL_PAGES - 1) * pagination.limit}
                >
                    Наступна
                </button>
                <button
                    onClick={() => handleChangePage((TOTAL_PAGES - 1) * pagination.limit)}
                    disabled={pagination.offset === (TOTAL_PAGES - 1) * pagination.limit}
                >
                    Остання
                </button>
            </div>
        </>
    )
};


export default PostsPagination;
