import { User } from "./user";

export interface BoardFilter{
    type: string[],
    assignedTo: User[],
    priority: number[],
}
