import type {Hair} from "./Hair.ts";
import type {Bank} from "./Bank.ts";
import type {Address} from "./Address.ts";
import type {Company} from "./Company.ts";
import type {Crypto} from "./Crypto.ts";

export interface IUserDummy {
   id: number;
   firstName: string;
   lastName: string;
   maidenName: string;
   age: number;
   gender: string;
   email: string;
   phone: string;
   username: string;
   password: string;
   birthDate: string;
   image: string;
   bloodGroup: string;
   height: number;
   weight: number;
   eyeColor: string;
   hair: Hair;
   ip: string;
   address: Address;
   macAddress: string;
   university: string;
   bank: Bank;
   company: Company;
   ein: string;
   ssn: string;
   userAgent: string;
   crypto: Crypto;
   role: string;
}

