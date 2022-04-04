import { Project } from "./project";

export interface Ticket {
  id: number;
  type: string;
  assignedTo: number;
  statusId: number;
  description: string;
  project: Project;
  comments: Comment[];

}
