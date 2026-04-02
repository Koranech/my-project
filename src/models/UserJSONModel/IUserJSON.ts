import type {Company} from "./Company.ts";
import type {Address} from "./Address.ts";

export default interface IUserJSON {
   id: number;
   name: string;
   username: string;
   email: string;
   address: Address;
   phone: string;
   website: string;
   company: Company;
}


