import type {IUser} from "./IUser.ts";

export interface IUserResponseModel {
    limit: number,
    skip: number,
    total: number,
    users: IUser[]
}
