import { Club } from "./Club";

export class User {
    id?:number;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    role?:string;
    clubs?: Club[];
}
  