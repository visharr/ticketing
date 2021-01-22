import { Publisher, Subjects, TicketUpdatedEvent } from "@vrtickets/common";

export class TicketUpdatedPuslisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
