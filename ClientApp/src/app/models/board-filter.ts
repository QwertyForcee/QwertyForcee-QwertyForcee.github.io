import { User } from "./user";

export interface BoardFilter{
    type: string[],
    assignedTo: number[],
    priority: number[],
}
