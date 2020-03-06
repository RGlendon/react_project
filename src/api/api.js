import * as axios from "axios";

const instance = axios.create({
    headers: {
        'api-key': '951be1b4-e53d-4f02-b7b3-34c9b3cb8b52'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
});

export const usersAPI = {
    instance,

    getUsers(currentPage, pageSize) {
        return this.instance.get(`/users?page=${currentPage}&count=${pageSize}`);
    },

    unfollow(userId) {
        return this.instance.delete(`/follow/${userId}`);
    },

    follow(userId) {
        return this.instance.post(`/follow/${userId}`);
    },

    getProfile(userId) {
        return this.instance.get(`/profile/` + userId);
    }
}

export const authAPI = {
    instance,

    me() {
        return this.instance.get(`/auth/me`)
    }
}
