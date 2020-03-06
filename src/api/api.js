import * as axios from "axios";

const instance = axios.create({
    headers: {
        'api-key': '951be1b4-e53d-4f02-b7b3-34c9b3cb8b52'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`);
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`);
    },

    follow(userId) {
        return instance.post(`/follow/${userId}`);
    },

    getProfile(userId) {
        console.warn('Absolete method, please use profileAPI.getProfile');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('/profile/status', {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`);
    }
};
