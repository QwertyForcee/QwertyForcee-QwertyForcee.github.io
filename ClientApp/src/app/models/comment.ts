import { Ticket } from "./ticket";
import { User } from "./user";

export interface Comment {
  user: User;
  text: string;
  ticket: Ticket;

}
