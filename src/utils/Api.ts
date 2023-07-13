import {IAuthUser} from "../types";

const API_URL = 'https://uninterested-calf-gilet.cyclic.app'

const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function auth(url: string, data: IAuthUser){
    return fetch(`${API_URL}/auth/${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(checkResponse)
}