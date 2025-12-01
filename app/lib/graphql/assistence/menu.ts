import { gql } from "@apollo/client";


export const SEND_TICKET_REQUEST = gql`
    mutation sendTicketRequest($payload: TicketInput!) {
    createTicket(input: $payload) {
        success
        message
        code
    }
}
`;