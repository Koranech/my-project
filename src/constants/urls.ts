const dummyUrl = import.meta.env.VITE_DUMMY_API_URL

export const urls = {
    getPageOfUsers: dummyUrl + '/users?limit=10&skip='
}
