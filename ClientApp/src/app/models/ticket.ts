import { Priority } from "./priority";
import { Project } from "./project";
import { Status } from "./status";
import { User } from "./user";

export interface Ticket {
  id: number;
  type: string;
  assignedTo: User;
  priority: Priority;
  statusId: number;
  status: Status;
  title: string;
  description: string;
  project: Project;
  comments: Comment[];

}
