import { User } from "./User";

export interface Club {
    id:number;
    title:string;
    leader: string;
    image:any;
    description: string;
    users: User[]
}
  