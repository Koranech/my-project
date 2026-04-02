import type {Address} from "./Address.ts";

export interface Company {
    department: string;
    name: string;
    title: string;
    address?: Address;
}
