import { Project } from "./project";
import { Status } from "./status";
import { User } from "./user";

export interface Ticket {
  id: number;
  type: string;
  assignedTo: User;
  statusId: number;
  status: Status;
  description: string;
  project: Project;
  comments: Comment[];

}
