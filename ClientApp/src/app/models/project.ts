import { Ticket } from "./ticket";
import { User } from "./user";

export interface Project {
  id: number;
  name: string;
  members: User[];
  tickets: Ticket[];
  avatar: Blob | null | string;
  updatedOn: string | Date;

}
