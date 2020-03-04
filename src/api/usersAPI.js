import * as axios from "axios";

export const usersAPI = {
    instance: axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        withCredentials: true,
    }),

    getUsers(currentPage, pageSize) {
        return this.instance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
    }
}
