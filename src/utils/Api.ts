import {IAuthToken, IAuthUser, IUser} from "../types";

const API_URL = import.meta.env.DEV ? 'http://localhost:3000' : 'https://nest-project-iota.vercel.app'

const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function auth(url: 'login' | 'register', data: IAuthUser) {
    return fetch(`${API_URL}/auth/${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then<IAuthToken>(checkResponse)
}

export function getCurrentUser(token: string) {
    return fetch(`${API_URL}/users/me`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        }
    }).then<IUser>(checkResponse)
}