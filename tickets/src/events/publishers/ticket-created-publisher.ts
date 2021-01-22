import { Publisher, Subjects, TicketCreatedEvent } from "@vrtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
