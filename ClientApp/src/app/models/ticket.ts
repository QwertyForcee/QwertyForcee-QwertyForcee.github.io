import { Comment } from "./comment";
import { Priority } from "./priority";
import { Project } from "./project";
import { Status } from "./status";
import { User } from "./user";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  type: string;
  assignedTo: User;
  priority: Priority;
  statusId: number;
  status?: Status;
  project?: Project;
  comments?: Comment[];
}
