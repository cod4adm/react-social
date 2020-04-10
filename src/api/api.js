import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    headers: {
        'API-KEY': '5003877b-b378-4f52-b3fa-f19c2d510be9'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
};