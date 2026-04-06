import type {IUser} from "./IUser.ts";

export default interface IUserPromise {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}
