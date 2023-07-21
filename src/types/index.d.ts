export interface IAuthUser {
    name: string,
    password: string,
}

export interface IAuthToken {
    token: string,
}

export interface IUser {
    name: string,
    id: number,
    registerDate: Date
}